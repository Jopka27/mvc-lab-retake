const fs = require('fs');
const path = require('path');

const { renderPage: renderHomePage } = require('../views/home');
const { renderPage: renderCarPage } = require('../views/car');
const { renderPage: renderAddCarPage } = require('../views/add-car');

const handleHome = (_,res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(renderHomePage());
    res.end();
};

const handleAddCar = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(renderAddCarPage());
    res.end();
};

const handleAddCarPost = (req, res) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', () => {
        const formData = JSON.parse(body);
        const filePath = path.join(__dirname, '../formData.json');
        fs.writeFile(filePath, JSON.stringify(formData), (err) => {
            if (err) {
                console.error(err);
                res.statusCode = 500;
                res.end('Błąd zapisu danych');
            } else {
                res.statusCode = 302;
                res.setHeader('Location', '/car');
                res.end();
            }
        });
    });
};

const handleCar = (req, res) => {
    const filePath = path.join(__dirname, '../formData.json');
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error(err);
            res.statusCode = 500;
            res.end('Błąd odczytu danych');
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(renderCarPage(JSON.parse(data)));
            res.end();
        }
    });
};

const handlePageNotFound = (req, res) => {
    res.statusCode = 404;
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.write('404 Strona nie znaleziona');
    res.end();
};

module.exports = {
    handleHome,
    handleAddCar,
    handleAddCarPost,
    handleCar,
    handlePageNotFound
};

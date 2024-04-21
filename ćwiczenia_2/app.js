const http = require('http');
const url = require('url');
const routes = require('./routes');

const { handleHome, handleAddCar, handleCar, handlePageNotFound } = require('./routes/index');

const requestListener = (request, response) => {
    const { url, method } = request;

    if (url === '/' && method === 'GET') {
        handleHome(request, response);
    }

    else if (url === '/add-car') {
        handleAddCar(request, response);
    }

    else if (url === '/car' && method === 'GET') {
        handleCar(request, response);
    }

    else {
        handlePageNotFound(request, response);
    }
};


const server = http.createServer(requestListener);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`);
});

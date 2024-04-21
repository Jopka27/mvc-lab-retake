const http = require('http');
const PORT = 3000;


const { getCars, getCarInformation, getCarAge } = require('./cars');
const {getHTMLDocumentStart, getHTMLDocumentEnd } = require('./htmlGenerator');

const server = http.createServer((request, response) => {
   
    response.setHeader('Content-Type', 'text/html');

    const cars = getCars();
    console.log(cars); 

    response.write(getHTMLDocumentStart());

    response.write('<body>')

    
    const id = 2; 
    const carInformation = getCarInformation(id);
    response.write(`<p>${carInformation}</p>`);
    
    const CarAge = getCarAge(id);
    response.write(`<p>${CarAge}</p>`);

    response.write('</body>');

    response.write(getHTMLDocumentEnd());

    response.end();
});




server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`);
});




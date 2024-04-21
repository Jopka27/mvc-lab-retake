function getHTMLDocumentStart() {
    return `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Cars</title>  
</head>

`;
}

const htmlStart = getHTMLDocumentStart();
console.log(htmlStart);


function getHTMLDocumentEnd() {
    return  `

    </html>`;
}

const htmlEnd = getHTMLDocumentEnd();
console.log(htmlEnd);


module.exports =  {getHTMLDocumentStart,getHTMLDocumentEnd};





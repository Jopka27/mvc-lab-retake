function renderPage(data) {
    const { make, model, year, color } = data;

    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Car Details</title>
        </head>
        <body>
            <header>
                <nav>
                 <ul>

                 <li>
                     <a href="?">Home</a>
                 </li>

                 <li>
                     <a href="?">Add car</a>
                 </li>

                 <li>
                     <a href="?">Last Added car</a>
                 </li>

                 </ul>
                </nav>    
            </header>
            <main>  
                <pre>${data}</pre>
            </main>
        </body>
</html>
    `;
}

module.exports = {renderPage};

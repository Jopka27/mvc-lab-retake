function renderPage(title, content) {

    return `
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Home</title>
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

            <main>Wlcome to the "Car" app "Home" page!</main>

        </body>
        </html>
    `;
}

module.exports = {renderPage};

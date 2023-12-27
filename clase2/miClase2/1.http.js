const http = require('node:http')
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    if(req.url == '/'){
        res.statusCode = 200
        res.end('Welcome to the home page')
    } else if (req.url == '/imagen.jpeg'){
        fs.readFile('./IgnacioVisciglia.jpeg', (err, data) => {
            if(err) {
                res.statusCode = 500
                res.end('500 Error')
            } else {
                res.setHeader('Content-Type', 'image/jpeg')
                res.statusCode = 200
                res.end(data)
            }
        })
    } else if (req.url == '/contacto'){
        res.statusCode = 200
        res.end('Contacto')
    } else {
        res.statusCode = 404 //Not Found
        res.end('404')
    }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
    console.log(`Server listening on port http://localhost:${desiredPort}`)
})
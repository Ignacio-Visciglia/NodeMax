const express = require('express')
const app = express()

app.disable('x-powered-by')// Para quitar el header de X-Powered-By: Express

const PORT = process.env.PORT ?? 1234

app.get('/', (req, res) => {
    /* res.status(200).send('<h1>Mi página</h1>')
    res.send('<h1>Mi página</h1>') */
    res.json({ message : 'Hola' })
})

app.post('/pokemon', (req, res) => {
    let body = ''
    req.on('data', chunk => {
        body += chunk.toString()
    })
    req.on('end', () => {
        const data = JSON.parse(body)
        res.status(201).json(data)
    })
})

app.listen(PORT, () => {
    console.log(`Server listening on port: http://localhost:${PORT}`)
})
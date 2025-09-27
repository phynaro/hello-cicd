const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/healthz', (req, res) => res.send('ok'))
app.get('/api/hello', (req, res) => res.json({ message: 'Hello from Node API!' }))

app.listen(PORT, () => console.log(`API on :${PORT}`))

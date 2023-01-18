const express = require('express');
const cors = require('cors');

const app = express()

var corOptions = {
    origin: 'https://localhost:8080'
}

// middleware
app.use(cors());

// app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))



// routers

const router = require('./routes/produsRouter.js');
app.use('/api/produse', router)

// testing

app.get('/', (req, res) => {
    res.json({ message: "Hello" })
})

//port

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
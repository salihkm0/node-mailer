const express = require("express")
const app = express()

const PORT = process.env.PORT || 3001
const routes = require('./routes/userRoutes')

require('./db')
app.use('/' ,routes)


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})

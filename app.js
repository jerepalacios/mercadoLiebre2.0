let express = require("express");
let app = express();
let path = require("path");
let PORT = 3000;


app.use(express.static(path.join(__dirname, "public"))); //la app utiliza 

/* routes */
app.get(`/`, (req, res) => {
    res.sendFile(path.join(__dirname, "./views/home.html"))
})


app.listen(PORT, () => console.log(`Servidor levantado ${PORT}
http://localhost:${PORT}
`))
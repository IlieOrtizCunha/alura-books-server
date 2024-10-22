const express = require("express")
const rotaLivro = require("./rotas/rotasLivro")
const rotaFavoritos = require("./rotas/rotasFavoritos")

const cors  = require("cors")

const app = express()
app.use(express.json())
app.use(cors({origin: "*"}))

app.use('/livro', rotaLivro)
app.use('/favoritos', rotaFavoritos)

const port = 8000

app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`);

})
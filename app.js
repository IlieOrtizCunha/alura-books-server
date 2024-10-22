const express = require("express")
const rotaLivro = require("./rotas/rotasLivro")
const cors  = require("cors")

const app = express()
app.use(express.json())
app.use(cors({origin: "*"}))

app.use('/livro', rotaLivro)

const port = 8000

app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`);

})
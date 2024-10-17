const express = require("express")
const rotaLivro = require("./rotas/rotasLivro")

const app = express()

app.use(express.json())

app.use('/livro', rotaLivro)

const port = 8000

app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`);

})
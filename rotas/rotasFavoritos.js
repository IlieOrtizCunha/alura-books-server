const { Router } = require("express")
const { getFavoritos, postFavoritos, deleteFavoritos } = require("../controladores/controladoresFavoritos")

const router = Router()

router.get('/', getFavoritos)

router.post('/:id', postFavoritos)

router.delete('/:id', deleteFavoritos)

module.exports = router
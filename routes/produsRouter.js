const controllerProdus = require('../controllers/controllerProdus.js')

const router = require('express').Router()

router.post('/addProdus', controllerProdus.addProdus)
router.get('/getProduse', controllerProdus.getProduse)
router.get('/:id', controllerProdus.getProdus)
router.put('/:id', controllerProdus.updateProdus)
router.delete('/:id', controllerProdus.deleteProdus)

module.exports = router
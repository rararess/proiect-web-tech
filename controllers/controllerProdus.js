const db = require('../models')

const Produs = db.produse

// Creare Produs
const addProdus = async (req, res) => {
    try {
        let info = {
            nume: req.body.nume,
            pret: req.body.pret,
            descriere: req.body.descriere
        }

        const produs = await Produs.create(info)
        res.status(200).json({ produs })
        console.log(produs);
    } catch (error) {
        res.status(500).json({ message: "Error", error })
    }


}

// Afisare Produse

const getProduse = async (req, res) => {
    let produse = await Produs.findAll({})
    res.json({ produse })
    console.log(produse);
}

// Afisare un singur produs

const getProdus = async (req, res) => {
    let id = req.params.id
    let produs = await Produs.findOne({ where: { id: id } })
    res.json({ produs })
}

// Update Produs

const updateProdus = async (req, res) => {
    let id = req.params.id
    const produs = await Produs.update(req.body, { where: { id: id } })
    res.status(200).send(produs)
}

// Stergere Produs

const deleteProdus = async (req, res) => {
    let id = req.params.id
    await Produs.destroy({ where: { id: id } })

    res.status(200).json({ message: "Succes" })
}

module.exports = {
    getProduse,
    getProdus,
    addProdus,
    updateProdus,
    deleteProdus,

}
const animes = require('express').Router();
const db = require('../models');
const { Animes } = db;

//GET ALL ANIMES
animes.get('/', async (req, res) => {
    try {
        const foundAnimes = await Animes.findAll()
        res.status(200).json(foundAnimes)
    } catch (err) {
        res.status(500).send("Server error")
        console.log(err)
    }
})

module.exports = animes
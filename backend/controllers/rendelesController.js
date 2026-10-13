import Rendelesek from '../models/rendelesekModel.js';

const RendelesController = {
  async getAll(req, res) {
    try {
      const rendelesek = await Rendelesek.getAll();
      res.json(rendelesek);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Hiba történt a rendelések lekérése során." });
    }
  },

  async getById(req, res) {
    try {
      const rendeles = await Rendelesek.getById(req.params.id);
      if (rendeles) {
        res.json(rendeles);
      } else {
        res.status(404).json({ error: "A rendelés nem található." });
      }
    }
  },

  async create(req, res) {
    try {
      if (!req.body.vevo_id || !req.body.termek_id || !req.body.mennyiseg || !req.body.rendeles_ideje) {
        return res.status(400).json({ error: "Az összes mező kitöltése kötelező." });
      }
      
      const newRendeles = await Rendelesek.create(req.body);
      res.status(201).json(newRendeles);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Hiba történt a rendelés létrehozása során." });
    }
  }
};

export default RendelesController;
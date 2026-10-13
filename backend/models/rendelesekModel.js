import pool from '..*/config/db.js';

const RendelesekModel = {
  async getAll() {
    const [rows] = await pool.query('SELECT * FROM rendelesek');
    return rows;
  },

  async getById(id) {
    const [rows] = await pool.query('SELECT * FROM rendelesek WHERE id = ?', [id]);
    return rows[0];
  },

  async create(rendeles) {
    const { vevo_id, termek_id, mennyiseg, rendeles_ideje } = rendeles;
    const [result] = await pool.query(
      'INSERT INTO rendelesek (vevo_id, termek_id, mennyiseg, rendeles_ideje) VALUES (?, ?, ?, ?)',
      [vevo_id, termek_id, mennyiseg, rendeles_ideje]
    );
    return { id: result.insertId, ...rendeles };
  }
};

export default RendelesekModel;
module.exports = {
  getAll: async function (req, res) {
    const db = req.app.get("db");
    try {
      let result = await db.property.getAll();
      res.json(result);
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  },
};

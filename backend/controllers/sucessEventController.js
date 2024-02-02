const {getAll} = require ("../models/successEvent")



exports.getAllEvents = async (req, res) => {
    try {
      const events = await getAll();
      res.status(200).json(events);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
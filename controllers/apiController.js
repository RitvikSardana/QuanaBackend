const api_city_get = async (req, res) => {
  try {
    res.status(200).json({ city: "Bangalore" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
    api_city_get
}
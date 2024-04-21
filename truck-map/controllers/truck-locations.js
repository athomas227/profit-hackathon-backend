import db from "../db/config.js";

const getAllTruckLocations = async (req, res) => {
  try {
    const truckLocations = await db.query("SELECT * FROM locations");
    res.json(truckLocations);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Error fetching truck locations" });
  }
}


export default getAllTruckLocations ;
import db from "../db";

const GetAllTruckLocations = async (req, res) => {
  try {
    const truckLocations = await db.query(
      "SELECT locations.*, drivers.firstname, drivers.lastname, drivers.email FROM locations INNER JOIN drivers ON locations.driver_id = drivers.driver_id"
    );
    res.json(truckLocations);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Error fetching truck locations" });
  }
};

export default GetAllTruckLocations;
import express from "express";
import getAllTruckLocations from "../controllers/truck-locations";

const router = express.Router();

router.get("/map", getAllTruckLocations);

export default router;
import express from "express";
import GetAllTruckLocations from "../controllers/truck-locations";

const router = express.Router();

router.get("/map", GetAllTruckLocations);

export default router;
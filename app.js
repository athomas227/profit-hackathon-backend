import express from "express";
import router from "./truck-map/routers/truck-locations";


const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to SwiftSwirl" });
  });

  app.use("/map", router);

export default app;
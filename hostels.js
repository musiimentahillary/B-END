import express from "express";
import {
  countByCity,
  countByType,
  createHostel,
  deleteHostel,
  getHostel,
  getHostelRooms,
  getHostels,
  updateHostel,
} from "../controllers/hostel.js";
import Hostel from "../models/Hostel.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHostel);

//UPDATE
router.put("/:id", verifyAdmin, updateHostel);
//DELETE
router.delete("/:id", verifyAdmin, deleteHostel);
//GET

router.get("/find/:id", getHostel);
//GET ALL

router.get("/", getHostels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHostelRooms);

export default router;

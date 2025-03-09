const { Router } = require("express");
const router = Router();
const multer = require("multer");
const jobMediaController = require("../Controllers/jobMediaController");

// Multer setup for filepaths
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, res, cb) => {
    cb(null, `${Date.now()} ${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post("/upload", upload.single("file"), jobMediaController.uploadMedia);

router.get("/view/:jobId", jobMediaController.getMedia);

router.delete("/delete/:id", jobMediaController.deletemedia);

module.exports = router;

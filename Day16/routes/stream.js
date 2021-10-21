let router = require("express").Router();
let path = require("path");
let fs = require("fs");

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/html/index.html"));
});

router.get("/video", function (req, res) {
  const range = req.headers.range;
  if (!range) {
    res.status(400).send("Range is required");
  }
  const videoPath = path.join(__dirname, "../public/videos/bigbuck.mp4");
  const videoSize = fs.statSync(videoPath).size;

  //how much data is sent at a time👇🏻
  const CHUNK_SIZE = 10 ** 6; //1MB

  const start = Number(range.replace(/\D/g, ""));
  //if not at the end of video then get the next 1MB or get the left 1MB at the end of video
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

  const contentLength = end - start + 1;
  //browser ko content samajhne ke liye headers chahiye hota hai
  const headers = {
    "Content-Range": `bytes ${start}-${end}/${videoSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-Type": "video/mp4",
  };

  res.writeHead(206, headers);

  const videoStream = fs.createReadStream(videoPath, { start, end });
  videoStream.pipe(res);
});

module.exports = router;

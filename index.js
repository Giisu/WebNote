const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const filePath = "data.json";
const htmlPath = path.resolve(__dirname + "/Jsontest.html");

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("파일을 읽는 중 오류가 발생했습니다", err);
    return;
  }
  const jsonData = JSON.parse(data);
  console.log("JSON 데이터:", jsonData);
});

app.listen(3000, function () {
  console.log("App is running on port 3000");
});

app.get("/", function (req, res) {
  res.sendFile(htmlPath);
});

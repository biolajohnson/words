const express = require("express");
const port = 3000;
const app = express();
const fs = require("fs");
const Node = require("./NodeClass");

app.use(express.static("public"));

app.get("/api", async (req, res) => {
  fs.readFile("./words.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      let wordString = "";
      for (const w of data) {
        wordString += w;
      }
      let newWordString = wordString.replace(".", "");
      const wordArray = newWordString.split("\n");
      let newWordArray;
      let wordGroup;
      let newArray = [];
      for (var i = 0; i < wordArray.length; i++) {
        newWordArray = wordArray[i].replace(/[1-9][0-9]{0,2}/g, "");
        wordGroup = new Node(newWordArray);
        wordGroup.processing();
        newArray.push(wordGroup);
      }
      let randomNumber = Math.floor(Math.random() * 1300);
      console.log(randomNumber);
      res.send(newArray[randomNumber]);
    }
  });
});

app.listen(port, () => console.log("The server is up..."));

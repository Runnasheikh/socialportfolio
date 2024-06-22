// pages/api/addPlaylistItem.js
import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "POST") {
    const newItem = req.body;

    // Path to the JSON file
    const filePath = path.join(process.cwd(), "data", "playlist.json");

    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        res.status(500).json({ message: "Error reading file", error: err });
        return;
      }

      let jsonData;
      try {
        jsonData = JSON.parse(data);
      } catch (parseError) {
        res
          .status(500)
          .json({ message: "Error parsing JSON", error: parseError });
        return;
      }

      // Add the new item to the items array
      jsonData.items.push(newItem);

      // Write the updated JSON data back to the file
      fs.writeFile(
        filePath,
        JSON.stringify(jsonData, null, 2),
        "utf8",
        (writeError) => {
          if (writeError) {
            res
              .status(500)
              .json({ message: "Error writing file", error: writeError });
            return;
          }

          res.status(200).json({ message: "Item added successfully" });
        }
      );
    });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}

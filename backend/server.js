const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 5001;

app.use(cors());

// Route to handle file download
app.get('/download/:id', (req, res) => {
  const fileId = req.params.id;
  
  const zipFile = path.join(__dirname, `./files/${fileId}.zip`);  // Assuming zip files are stored in the /files directory

  res.download(zipFile, `${fileId}.zip`, (err) => {
    if (err) {
      console.error("Error while downloading the file:", err);
      res.status(404).send("File not found or error in downloading the file.");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// const express = require('express');
// const path = require('path');
// const fs = require('fs');

// const app = express();
// const PORT = 5001;  // You can use any port you prefer

// // Route to handle file download
// app.get('/download/:id', (req, res) => {
//   const fileId = req.params.id;  // Get the file ID from the request
//   const zipFile = path.join(__dirname, `./files/${fileId}.zip`);  // Assuming zip files are stored in the /files directory

//   // Check if file exists
//   if (!fs.existsSync(zipFile)) {
//     return res.status(404).send("File not found");
//   }

//   // Create a stream to download the file
//   const fileStream = fs.createReadStream(zipFile);

//   // Set headers for the response
//   res.setHeader('Content-Disposition', `attachment; filename=${fileId}.zip`);

//   // Pipe the file to the response
//   fileStream.pipe(res);

//   // Handle any errors that may occur while streaming the file
//   fileStream.on('error', (err) => {
//     console.error("Error while reading the file:", err);
//     // Ensure the response is not sent twice in case of an error
//     if (!res.headersSent) {
//       return res.status(500).send("Error reading the file");
//     }
//   });

//   // Handle premature client disconnection
//   req.on('close', () => {
//     if (!res.headersSent) {
//       fileStream.destroy();  // Stop streaming if client disconnects
//     }
//   });
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


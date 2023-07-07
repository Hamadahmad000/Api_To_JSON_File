const express = require("express");
const axios = require("axios");
const fs = require("fs");

const app = express();
const PORT = 3000;

// Define the API endpoint
const API_URL = "https://api.alquran.cloud/v1/quran/ar.alafasy";

// Define the file path to save the data
const FILE_PATH = "./QuranWithAudio.json";

// Route to fetch data from the API and save it to a file
app.get("/fetch-data", async (req, res) => {
  try {
    // Make the API request
    const response = await axios.get(API_URL);
    const data = response.data;

    // Save the data to a file
    fs.writeFileSync(FILE_PATH, JSON.stringify(data));

    res.send("Data fetched and saved successfully!");
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).send("An error occurred while fetching data.");
  }
});

const apiEndpoints = [
  "https://api.alquran.cloud/v1/juz/1/ar.asad",
  "https://api.alquran.cloud/v1/juz/2/ar.asad",
  "https://api.alquran.cloud/v1/juz/3/ar.asad",
  "https://api.alquran.cloud/v1/juz/4/ar.asad",
  "https://api.alquran.cloud/v1/juz/5/ar.asad",
  "https://api.alquran.cloud/v1/juz/6/ar.asad",
  "https://api.alquran.cloud/v1/juz/7/ar.asad",
  "https://api.alquran.cloud/v1/juz/8/ar.asad",
  "https://api.alquran.cloud/v1/juz/9/ar.asad",
  "https://api.alquran.cloud/v1/juz/10/ar.asad",
  "https://api.alquran.cloud/v1/juz/11/ar.asad",
  "https://api.alquran.cloud/v1/juz/12/ar.asad",
  "https://api.alquran.cloud/v1/juz/13/ar.asad",
  "https://api.alquran.cloud/v1/juz/14/ar.asad",
  "https://api.alquran.cloud/v1/juz/15/ar.asad",
  "https://api.alquran.cloud/v1/juz/16/ar.asad",
  "https://api.alquran.cloud/v1/juz/17/ar.asad",
  "https://api.alquran.cloud/v1/juz/18/ar.asad",
  "https://api.alquran.cloud/v1/juz/19/ar.asad",
  "https://api.alquran.cloud/v1/juz/20/ar.asad",
  "https://api.alquran.cloud/v1/juz/21/ar.asad",
  "https://api.alquran.cloud/v1/juz/22/ar.asad",
  "https://api.alquran.cloud/v1/juz/23/ar.asad",
  "https://api.alquran.cloud/v1/juz/24/ar.asad",
  "https://api.alquran.cloud/v1/juz/25/ar.asad",
  "https://api.alquran.cloud/v1/juz/26/ar.asad",
  "https://api.alquran.cloud/v1/juz/27/ar.asad",
  "https://api.alquran.cloud/v1/juz/28/ar.asad",
  "https://api.alquran.cloud/v1/juz/29/ar.asad",
  "https://api.alquran.cloud/v1/juz/30/ar.asad",
];

// Define the file path to save the data
const FILE_PATH_2 = "./QuranByJuzNew.json";

app.get("/fetch-data-multiple", async (req, res) => {
  try {
    const allData = [];

    // Fetch data from each API endpoint sequentially
    for (let i = 0; i < apiEndpoints.length; i++) {
      const endpoint = apiEndpoints[i];
      const response = await axios.get(endpoint);
      const data = response.data;

      const dataWithId = {
        id: i + 1, // Add an ID to each API data
        data: data,
      };

      allData.push(dataWithId);
    }

    // Save the combined data to a file
    fs.writeFileSync(FILE_PATH, JSON.stringify(allData));

    res.send("Data fetched and saved successfully!");
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).send("An error occurred while fetching data.");
  }
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

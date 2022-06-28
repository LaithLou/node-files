"use strict";

const argv = process.argv;

const path = argv[2];

const fsP = require("fs/promises");

async function cat(path) {
  try {
    let contents = await fsP.readFile(path, "utf8");
    console.log(contents);
  } catch (err) {
    console.log(`Error reading ${path} :
  ${err.message}`);
    process.exit(1);
  }
}

if (path.includes("http")) {
  webCat();
} else {
  cat(path);
}

const axios = require("axios");

async function webCat(path) {
  try {
    let contents = await fsP.readFile(path, "utf8");
    console.log(contents);
  } catch (err) {
    console.log(`Error web reading ${path} :
  ${err.message}`);
    process.exit(1);
  }
}

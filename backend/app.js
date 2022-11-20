// import express from "express";
const express = require("express");

const app = express();
const port = 3000;

const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

// const { insertData } = require("insert-data");

// Atlas connection string
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.poah4et.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(url);
const dbName = "metrohacks_2022";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

async function run() {
  try {
    await client.connect();
    console.log("Connected correctly to server");

    // Use the collection "users"
    const db = client.db(dbName);
    const col = db.collection("groups");

    let group = {
      groupID: "g0001",
      groupName: "group name",
      groupMembers: {
        subscriberID: "s0001",
        subscriberPhone: 1234567890,
      },
      messages: {
        messageID: "m0001",
        messageDateTime: "Nov 11 2022",
        messageContext: "this is going to be a message",
      },
    };

    // Insert a single document, wait for promise so we can read it back
    const p = await col.insertOne(group);

    // Find one document
    const myDoc = await col.findOne();

    // Print to the console
    console.log(myDoc);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
    console.log("closed");
  }
}

run().catch(console.dir);

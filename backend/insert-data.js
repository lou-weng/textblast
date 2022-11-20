const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

// Atlas connection string
const URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.poah4et.mongodb.net/?retryWrites=true&w=majority`;
const dbName = "metrohacks_2022";

async function createGroup(gID, gName) {
  const client = new MongoClient(URL);
  try {
    const groupCollection = client.db(dbName).collection("groups");

    let group = {
      groupID: gID,
      groupName: gName,
      members: null,
      messages: null,
    };
    return await groupCollection.insertOne(group);
  } catch (e) {
    console.log(
      "The transaction was aborted due to an unexpected error: " + e.stack
    );
  } finally {
    await client.close();
    console.log("closed client");
  }
}

async function getGroup(groupID) {
  const client = new MongoClient(URL);
  try {
    const groupCollection = client.db(dbName).collection("groups");
    const group = {
      groupID: groupID,
    };

    return await groupCollection.findOne(group);
  } catch (e) {
    console.log(
      "The transaction was aborted due to an unexpected error: " + e.stack
    );
  } finally {
    await client.close();
    console.log("closed client");
  }
}

module.exports = {
  createGroup,
  getGroup,
};

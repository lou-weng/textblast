// import express from "express";
const express = require("express");
const cors = require('cors')
const bodyParser = require('body-parser')
const auth = require("./auth");

const app = express();
app.use(cors())
const port = 3000;

<<<<<<< HEAD
const jsonParser = bodyParser.json()
=======
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

// Atlas connection string
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.poah4et.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(url);
const dbName = "metrohacks_2022";
>>>>>>> 1cca5b7 (app and connect is a go)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/user", async (req, res) => {
    const { username } = req.query

    const user = await auth.getUser(username)
    res.send(user)
})

app.post("/register", jsonParser, async (req, res) => {
    const { username, password } = req.body

    const isUsernameTaken = await auth.getUser(username)

    if (isUsernameTaken) {
        res.status(400)
        res.send("Username is already taken")
        return
    }

    const hashedPassword = auth.getHashedPassword(password)

<<<<<<< HEAD
    const userObject = {
        "username": username,
        "password": hashedPassword
    }
=======
    // Print to the console
    console.log(p);
    console.log(myDoc);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
    console.log("closed");
  }
}
>>>>>>> 1cca5b7 (app and connect is a go)

    await auth.createUser(userObject)
    res.status(200)
    res.send("Successfully registered!")
})

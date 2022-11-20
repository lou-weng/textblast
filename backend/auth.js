const crypto = require('crypto');
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

// Atlas connection string
const URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.poah4et.mongodb.net/?retryWrites=true&w=majority`;
const dbName = "metrohacks_2022"

const getHashedPassword = (password) => {
    const sha256 = crypto.createHash('sha256');
    const hash = sha256.update(password).digest('base64');
    return hash;
}

async function createUser(user) {
    const client = new MongoClient(URL);
    try {
        const db = client.db(dbName)
        const collection = db.collection("users")

        return await collection.insertOne(user)
    } catch(error) {
        console.log(error.stack)
    } finally {
        client.close()
        console.log("closed")
    }
}

async function getUser(username) {
    const client = new MongoClient(URL);
    try {
        const db = client.db(dbName)
        const collection = db.collection("users")
        const query = {
            "username": username
        }

        const user = await collection.findOne(query)
        
        return user
    } catch(error) {
        console.log(error.stack)
    } finally {
        client.close()
    }
}

module.exports = {
    getUser: getUser,
    getHashedPassword: getHashedPassword,
    createUser: createUser
}

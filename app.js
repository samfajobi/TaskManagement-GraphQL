const express = require("express");
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");



const app = express();

let URL = "mongodb+srv://Christsam:SamFajobi99@cluster0.9vutphb.mongodb.net/?retryWrites=true&w=majority"
mongoose.set("strictQuery", false);
mongoose.connect(URL);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    console.log("Database Connection Successful!!!");
});

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
    
}));

const PORT = 4000
app.listen(PORT, () => {
    console.log(`App is Running on PORT ${PORT}`)
});
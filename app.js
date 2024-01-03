const express = require('express');
const connectDB = require('./db');
const routes = require ("./routes/api/books");
const bodyParser = require("body-parser")
const cors = require ("cors");
const app = express();


app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => res.send('Hello Sourav , i Mern!'));

app.use("/api/books", routes);
const port = process.env.PORT || 8082;
connectDB();
app.listen(port, () => console.log(`Server running on port ${port}`));
 
const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/UserRoutes");
const productRoute = require("./routes/productRoute");
const { getAllUser } = require("./controller/userController");
const password = "w575TgTHKZM8nb1i";
const atlas_string =
    "mongodb+srv://abdulazeezfaruq43_db_user:w575TgTHKZM8nb1i@cluster0.hhkarmp.mongodb.net/?appName=Cluster0";

mongoose
    .connect(atlas_string)
    .then(() => console.log(`Mongo Connected`))
    .catch((err) => console.error(`Conection Error: `, err));

const app = express();
const PORT = 5173;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("server is active ");
});

app.use("/users", userRoute);

app.use("/products", productRoute);

app.listen(PORT, () => {
    console.log(`Server is active on port ${PORT}`);
});

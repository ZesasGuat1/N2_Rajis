const express = require("express");
const mongoose = require("mongoose");

const User = require("./model/user");
const Room = require("./model/room");

require("dotenv/config");

const app = express();

app.use(express.json());


app.get("/usuario", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
});


app.post("/criar_user", async (req, res) => {
  const user = new User({
    nome: req.body.nome,
    sobrenome: req.body.sobrenome,
  });

  try {
    const saveduser = await user.save();
    res.json(saveduser);
  } catch (err) {
    res.json({ message: err });
  }
});


app.get("/usuario/:nome", async (req, res) => {
  try {
    const user = await User.findOne({ nome: req.params.nome });
    res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
});


app.delete("/usuario/:idUsuario", async (req, res) => {
  try {
    const removeUser = await User.remove({ _id: req.params.idUsuario });
    res.json(removeUser);
  } catch (err) {
    res.json({ message: err });
  }
});


app.get("/sala", async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (err) {
    res.json({ message: err });
  }
});


app.post("/criar_salas", async (req, res) => {
  const room = new Room({
    nome: req.body.nome,
    lotacao: req.body.lotacao,
  });

  try {
    const savedroom = await room.save();
    res.json(savedroom);
  } catch (err) {
    res.json({ message: err });
  }
});

app.get("/sala/:salaid", async (req, res) => {
  try {
    const room = await Room.findById(req.params.salaid);
    res.json(room);
  } catch (err) {
    res.json({ message: err });
  }
});


app.patch("/sala/:salaid", async (req, res) => {
  try {
    const updatedRoom = await Room.updateOne(
      { _id: req.params.salaid },
      { $set: { nome: req.body.nome, lotacao: req.body.lotacao } }
    );
    res.json(updatedRoom);
  } catch (err) {
    res.json({ message: err });
  }
});

mongoose.connect(
  process.env.DB_CONNECTION_STRING,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (req, res) => {
    console.log("connected to database");
  }
);

app.listen(3000, () => {
  console.log("listening to 3000");
});

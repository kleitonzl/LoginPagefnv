const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const router = express.Router();

// Rota para login
router.post("/login", async (req, res) => {
  const { cpf, senha } = req.body;

  try {
    // Verificar se o usuário existe
    const user = await User.findOne({ where: { cpf } });
    if (!user) {
      return res.status(404).json({ message: "Usuário não cadastrado. Cadastre-se!" });
    }

    // Verificar senha
    const isMatch = await bcrypt.compare(senha, user.senha);
    if (!isMatch) {
      return res.status(400).json({ message: "Senha incorreta." });
    }

    return res.status(200).json({ message: "Login realizado com sucesso!" });
  } catch (err) {
    return res.status(500).json({ message: "Erro no servidor." });
  }
});

// Rota para cadastro
router.post("/register", async (req, res) => {
  const { cpf, senha } = req.body;

  try {
    // Verificar se o CPF já está registrado
    const userExists = await User.findOne({ where: { cpf } });
    if (userExists) {
      return res.status(400).json({ message: "Usuário já cadastrado." });
    }

    // Criptografar a senha
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(senha, salt);

    // Criar o usuário
    const newUser = await User.create({ cpf, senha: hashedPassword });

    return res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
  } catch (err) {
    return res.status(500).json({ message: "Erro ao registrar usuário." });
  }
});

module.exports = router;

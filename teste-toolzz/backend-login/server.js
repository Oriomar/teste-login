const express = require('express');
const cors = require('cors');
const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === 'teste@teste.com' && password === 'senha123') {
    res.status(200).json({ message: 'Login bem-sucedido' });
  } else {
    res.status(401).json({ message: 'Credenciais inválidas' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

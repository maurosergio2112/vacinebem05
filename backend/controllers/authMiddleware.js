const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ error: 'Token de autenticação não fornecido.' });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Token de autenticação inválido.' });
    }
    req.userId = decoded.userId;
    next();
  });
};

module.exports = {
  authenticateToken
};

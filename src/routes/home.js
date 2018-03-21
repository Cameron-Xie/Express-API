export default (req, res) =>
  res.set('Content-Type', 'application/json').status(200).json({ message: 'Hello World!' });

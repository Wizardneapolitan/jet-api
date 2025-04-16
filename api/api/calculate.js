export default function handler(req, res) {
  const { departure, arrival, pax } = req.body;
  const price = 1000 + pax * 300; // esempio di calcolo
  res.status(200).json({ estimated_price: price });
}

import express from "express";
import morgan from "morgan";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});

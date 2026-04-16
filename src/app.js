const express = require("express");
const requestId = require("./middlewares/requestId");
const app = express();

app.use(express.json());
app.use(requestId);

app.get("/health", (req, res) => {
	res.status(200).json({ ok: true });
});

module.exports = app;

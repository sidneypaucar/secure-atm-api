const express = require("express");
const pinoHttp = require("pino-http");
const logger = require("./utils/logger");
const requestId = require("./middlewares/requestId");

const app = express();

app.use(express.json());

app.use(requestId);

app.use(
	pinoHttp({
		logger,
		genReqId: (req) => req.requestId,
		customProps: (req) => ({
			requestId: req.requestId,
		}),
	})
);


app.get("/health", (req, res) => {
	req.log.info(
		{
			requestId: req.requestId,
			method: req.method,
			path: req.url,
		},
		"health check hit"
	);

	res.status(200).json({ ok: true });
});

module.exports = app;

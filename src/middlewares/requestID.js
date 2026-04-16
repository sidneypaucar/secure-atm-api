const { v4: uuidv4 } = require("uuid");

function requestId(req, res, next) {
	const incomingRequestId = req.headers["x-request-id"];
	const requestId = incomingRequestId || uuidv4();

	req.requestId = requestId;
	res.setHeader("X-Request-Id", requestId);

	next();
}

module.exports = requestId;

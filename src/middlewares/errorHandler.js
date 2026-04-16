function errorHandler(err, req, res, next) {
	req.log.error(
		{
			err,
			requestId: req.requestId,
		},
		"unhandled error"
	);

	res.status(err.status || 500).json({
		error: {
		message: err.message || "Internal Server Error",
		requestId: req.requestId,	
		},
	});
}

module.exports = errorHandler;

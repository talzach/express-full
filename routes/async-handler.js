module.exports = function asyncHandler(fn) {
	return async function (request, response) {
		try {
			const data = await fn(request, response);
			response.json({
				success: true,
				data,
			});
		} catch (err) {
			const statusCode = err.status || 500;
			response.status(statusCode).json({
				success: false,
				error: err.message,
			});
		}
	};
};

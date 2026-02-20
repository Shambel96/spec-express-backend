const errorMiddleware = (err, req, res, next) => {
  res.status(400).json({
    message: err.message || "Something went wrong"
  });
};

export default errorMiddleware;
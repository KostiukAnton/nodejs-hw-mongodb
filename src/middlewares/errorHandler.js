export const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Something went wrong';
  const errors = err.errors || null;

  res.status(status).json({
    status,
    message,
    ...(errors && { errors }),
  });
};

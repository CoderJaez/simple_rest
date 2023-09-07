export default function errorHandler(err, req, res, next) {
  if (err.name === "ValidationError") {
    let validationErrors = [];
    for (const field in err.errors) {
      validationErrors.push({
        field: field,
        message: err.errors[field].message,
      });
    }

    return res.status(400).json(validationErrors);
  }
  return next();
}

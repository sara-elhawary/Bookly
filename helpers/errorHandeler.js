exports.customError = ({ status = 500, message }) => {
  var error = new Error();
  error.message = message;
  error.status = status;

  return error;
}



exports.errorHandler = (err, req, res, next) => {

  if (err.message === 'access denied') {
    res.status(403);
    return res.json({ success: false, error: err.message });
  }
  else if (err.type == 'validation') {
    res.status(400);
    return res.json({ success: false, error: err });
  }
  else if (err.status == 500) {
    res.status(500);
    return res.json({ success: false, error: "SERVER ERROR" });
  }

  res.status(err.status);
  return res.json({ success: false, error: err.message });



}
const mongoose = require('mongoose');

exports.connect = (async () => {
  try {

    var client = await mongoose.connect("mongodb+srv://Sustaing:sustaing123456@sustaing.fwxqe.mongodb.net/?retryWrites=true&w=majority");

  } catch (error) {
    console.log(error);
    process.exit(1);
  }

  return client;

})();

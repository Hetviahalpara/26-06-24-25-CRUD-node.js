const mongoose = require("mongoose");

const Dbconnection = () => {
  mongoose
    .connect(
      "mongodb+srv://hetviahalpara:8VDsY2SGhPAxIMi4@netflix.xjkkgfq.mongodb.net/"
    )
    .then((res) => {
    //   console.log(res);
      console.log('db is connect');
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = Dbconnection;

const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  Name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  image:{
    public_id: {
        type : String,
   },
    url:{
        type:String,
    }
  },
  details: {
    type: Array
  },
  educations: {
    type: Array
  },
  jobdetails: {
    type: Array
  },
  workexperience: {
    type: Array
  },
  skill: {
    type: Array
  },
  interest : {
    type: Array
  },
  summary: {
    type: String
  }
});

//this method search for a user by email and password.
userSchema.statics.findByCredentials = async (email, password) => {
  console.log(email, password);
  const user = await User.findOne({ email });
  if (user === null) {
    return user;
  }
  if (password === user.password) {
    return user;
  }
};

const User = mongoose.model("User", userSchema, "data users");
module.exports = User;

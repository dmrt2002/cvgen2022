const { default: axios } = require("axios");
const User = require("../modals/User");
const cloudinary = require('../utils/cloudinary.js')


exports.registerNewUser = async (req, res) => {
  var Name = req.body.name;
  var password = req.body.password;
  var email = req.body.email;
  
  User
      .create({
        Name: Name,
        email: email,
        password: password,
        url: "",
        image: {
          public_id: "",
          url: ""
        }
      }, async function (err, user) {
          if (err) {
              console.log("Error creating User: ", err);
              res
                  .status(400)
                  .json(err)
          } else {
              console.log("User Created: ", user);
              res
                  .status(201)
                  .json(user)
          }
      })
  };

  exports.loginUser = async(req,res) => {
    try {
      const email = req.body.email;
      const password = req.body.password;
      const admin = await User.findByCredentials(email, password)
      if (admin === null) {
        return res
          .status(401)
          .json("Invalid Credentials");
      }
      res.status(200).json({ admin });
    } catch (err) {
      res.status(400).json("Incorrect Password");
    }
  }

  exports.storeDetails = async(req,res) => {
    try {
      const detail = req.body;
      let image = detail.image
      const result = await cloudinary.uploader.upload(image,{
        folder:"images",
      })
      let userId = detail.userId.userId
      let updated = await User.findOneAndUpdate({
        _id: userId,
      } , {
        $push: {
          details: {
            name: detail.name,
            email: detail.email,
            profession: detail.profession,
            city: detail.city,
            pincode: detail.pincode,
            phone: detail.phone,
            portfolio: detail.portfolio,
            linkedin: detail.linkedin
          }
        },
      });
      let updatedtwo = await User.findOneAndUpdate({
        _id: userId
      },{
        image: {
          public_id:result.public_id,
          url:result.secure_url
        }
      });
      res.status(200).json(userId)
    }
    catch(e) {
      console.log(e)
    }
  }

  exports.storeJobDetails = async(req,res) => {
    try {
      const detail = req.body;
      let userId = detail.userId.userId
      let updated = await User.findOneAndUpdate({
        _id: userId,
      } , {
        $push: {
          jobdetails: {
            title: detail.title,
            company: detail.company,
            startdate: detail.startdate,
            enddate: detail.enddate,
          }
        },
      });
      res.status(200).json(userId)
    }
    catch(e) {
      console.log(e)
    }
  }

  exports.storeEducationDetails = async(req,res) => {
    try {
      const detail = req.body;
      console.log(detail)
      let userId = detail.userId.userId
      let updated = await User.findOneAndUpdate({
        _id: userId,
      } , {
        $push: {
          educations: {
            school: detail.school,
            location: detail.location,
            degree: detail.degree,
            city: detail.city,
            startdate: detail.startdate,
            enddate: detail.enddate,
          }
        },
      });
      res.status(200).json(userId)
    }
    catch(e) {
      console.log(e)
    }
  }

  exports.storeJobExperience = async(req,res) =>  {
   try {
    const detail = req.body;
    let userId = detail.userId.userId
    let updated = await User.findOneAndUpdate({
      _id: userId,
    } , {
      $push: {
        workexperience: {
          experience: detail.experience,
        }
      },
    });
    res.status(200).json(userId)
  }
  catch(e) {
    console.log(e)
  }
  }

  exports.storeSkills = async(req,res) =>  {
    try {
      const detail = req.body;
      let userId = detail.userId.userId
      let skillset = detail.userId.skills
      let updated = await User.findOneAndUpdate({
        _id: userId,
      } , {
        $push: {
         skill: {
            skills: skillset,
          }
        },
      });
      res.status(200).json(userId)
    }
    catch(e) {
      console.log(e)
    }
   }

   exports.storeInterests = async(req,res) =>  {
    try {
      const detail = req.body;
      let userId = detail.userId.userId
      let interests = detail.userId.interests
      let updated = await User.findOneAndUpdate({
        _id: userId,
      } , {
        $push: {
         interest: {
            interests: interests,
          }
        },
      });
      res.status(200).json(userId)
    }
    catch(e) {
      console.log(e)
    }
   }

   exports.storeSummary = async(req,res) =>  {
    try {
      const detail = req.body;
      let userId = detail.userId.userId
      let summary = detail.summary
      let updated = await User.findOneAndUpdate({
        _id: userId
      },{
        summary: summary
      });
      res.status(200).json(userId)
    }
    catch(e) {
      console.log(e)
    }
   }

   exports.getAllJobs = async(req,res) => {
     try {
      const detail = req.body;
      let userId = detail.userId.userId
      let user = await User.findOne({ _id: userId })
      console.log(user.jobdetails[user.jobdetails.length-1])
      let obj = user.jobdetails 
      res.status(200).json(obj)
     }
     catch(e) {
      console.log(e)
     }
   }

   exports.getData = async(req,res) => {
     let detail = req.body
     let Id = detail.userId
     let user = await User.findOne({ _id: Id })
     console.log(user)
     res.status(200).json(user)
   } 

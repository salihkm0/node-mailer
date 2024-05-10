
const router = require("express").Router();
const nodemailer = require("nodemailer");

const User = require("../models/userModels")


const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    // port: 587,
    // secure: false, // Use `true` for port 465, `false` for all other ports
    service: "gmail",
    auth: {
      user: "salihkm000@gmail.com",
      pass: "hqjk bfys srli ykna",
    },
  });
  
  const msgMail = async () => {
    const info = await transporter.sendMail({
      from: '"Salih km "salihkm000@gmail.com', // sender address
      to: "muhammedsalih473@gmail.com , ashin209@gmail.com",// list of receivers
      subject: 'Node Mailer Assignment' , // Subject line
      // text: "Product added successfully.", // plain text body
  //     html: `
  //     <html>
  //     <body>
  //     <header>
  //   <table style=" border: 1px solid black ; color:#fff;border-collapse: collapse; width : 300px;text-align : center; padding : 10px;">
  //   <tr>
  //   <td style=" border: 1px solid black">Product name</td>
  //   <td style=" border: 1px solid black">${title}</td>
  //   </tr>
  //   <tr>
  //     <td style=" border: 1px solid black">Description</td>
  //     <td style=" border: 1px solid black">${description}</td>
  //   </tr>
  //   <tr>
  //     <td style=" border: 1px solid black">Price</td>
  //     <td style=" border: 1px solid black">${price}</td>
  //   </tr>
  // </table>
  // </header>
  // </body>
  // <footer style="text-align:center;color:#fff;">&copy;2024 Salih KM.</footer>
  // </html>`,
  
  html : "Good Evening Sir, I hope u r well. This email is sent using node mailer."
    });
  
    console.log("Message sent: %s", info.messageId);
  };
  


  
  router.post("/user/add", async (req, res) => {
    try {
      console.log(req.body);
    //   let newUser = new User(req.body);
  
      // let data = new product(req.body); // create a product from the request body
    //   await newUser.save();
      res.status(201).send("Success");

      const sub = "New user Added";
      const result = "user added successfully....";
      
      msgMail().catch(console.error);

    } catch (error) {
      console.error(error);
      res.status(400).send("Error:" + error.message);
    }
  });

  module.exports = router;
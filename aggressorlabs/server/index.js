const path = require("path");
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 4146;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.use(express.static('public'));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "aggressorlabs@gmail.com",
    pass: "spacetitan3",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

// router.post("/contact", (req, res) => {
//   const name = req.body.name;
//   const email = req.body.email;
//   const message = req.body.message; 
//   const mail = {
//     from: name,
//     to: "ben@aggressorlabs.com",
//     subject: "Contact Form Submission",
//     html: `<p>Name: ${name}</p>
//            <p>Email: ${email}</p>
//            <p>Message: ${message}</p>`,
//   };
  
//   contactEmail.sendMail(mail, (error) => {
//     if (error) {
//       res.json({ status: "ERROR" });
//     } else {
//       res.json({ status: "Message Sent" });
//     }
//   });
// });

if (process.env.NODE_ENV === "production"){

  app.use(express.static(path.join(__dirname,"client", "build")))
  
  app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname,"client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


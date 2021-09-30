require('dotenv').config();

export default function (req, res) {
    const nodemailer = require('nodemailer');
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASSWORD;

    console.log(req.body)
    
    const transport = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user,
          pass,
        },
        secure: true,
      })

    const mailData = {
        to: user,
        from: `New Job Offer from ${req.body.name}`,
        subject: `${req.body.email} sent you an Job Offer`,
        html: `<h1>Hi Alejandro</h1> <p>${req.body.name} has sent you a new Job Offer!</p> <p>${req.body.text}</p>`
    }
        
    transport.sendMail(mailData);

    res.status(200);
}

require('dotenv').config();

export default function (req, res) {
    const nodemailer = require('nodemailer');
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASSWORD;
    
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
        from: user,
        subject: `${req.body.name} sent you an Job Offer`,
        html: `<h1>Hi Alejandro</h1> <p>${req.body.name} has sent you a new Job Offer!</p> <p>${req.body.text}</p> <p>${req.body.email}</p>`
    }
        
    transport.sendMail(mailData, (error, response) => {
        if (error) {
            console.log(error)
            res.end("error")
        } else {
            console.log("Message sent")
            res.end("sent")
        }

        transport.close();
    })
}

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send', (req, res) => {
    const { Name, email, Message } = req.body;
    
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL,
        subject: `Contact Form Submission from ${Name}`,
        text: `Name: ${Name}\nEmail: ${email}\nMessage: ${Message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }

    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

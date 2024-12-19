const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');


// Serve static files from the project root directory
app.use(express.static(path.join(__dirname, '../')));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// POST Route to handle form submission
app.post('/send', (req, res) => {
    const { name, email, message } = req.body;

    // Set up Nodemailer transporter (configure with your email provider)
    const transporter = nodemailer.createTransport({
        service: 'Gmail', // Use Gmail as email provider
        auth: {
            user: 'cringeanimeanarchy@gmail.com',    // Replace with your email
            pass: 'vcqy xmyh rinr pnaq'     // Replace with your email password or app password
        }
    });

    const mailOptions = {
        from: email,
        to: 'cringeanimeanarchy@gmail.com', // Replace with your email
        subject: `Contact Form Submission from ${name}`,
        text: message
    };

    const path = require('path'); // Import path module

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error(error);
        return res.status(500).send('Error sending message');
    }
    // Redirect to success.html
    res.sendFile(path.resolve(__dirname, '../success.html'));

});

});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

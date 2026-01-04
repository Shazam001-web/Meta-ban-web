const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname)); // Serve static files like index.html

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/generate', (req, res) => {
    const { phone, reason } = req.body;

    if (!phone) {
        return res.status(400).json({ error: 'Phone number is required' });
    }

    // Simulated professional appeal text
    let report = `Subject: Appeal for Account Review - Phone Number ${phone}

Dear Meta Support Team,

I am writing to respectfully request a review of the ban on my account associated with the phone number: ${phone}.

I believe this ban may have been applied in error or due to a misunderstanding. ${reason ? 'Here is a brief explanation: ' + reason : 'I have always followed Meta's community guidelines and terms of service to the best of my knowledge.'}

I value the Meta platforms (WhatsApp/Facebook/Instagram) and would appreciate the opportunity to regain access. Please review my account activity.

Thank you for your time and assistance.

Best regards,
[Your Name]
Phone: ${phone}`;

    res.json({ report });
});

app.listen(PORT, () => {
    console.log(`META BAN server running at http://localhost:${PORT}`);
});

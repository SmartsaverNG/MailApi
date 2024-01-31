const { sendEmail } = require("../services/email");

const home = async (req, res) => {
  try {
    console.log(req.body);

    const {
      fullName,
      email,
      applicationMode,
      phoneNumber,
      message,
      recipientEmail,
    } = req.body;

    if (
      !fullName ||
      !email ||
      !applicationMode ||
      !phoneNumber ||
      !message ||
      !recipientEmail
    ) {
      res.status(400).json({
        status: false,
        message: "Please fill all details",
      });
    }

    const templateData = {
      fullName,
      email,
      applicationMode,
      phoneNumber,
      message,
    };

    await sendEmail(recipientEmail, templateData);

    return res.status(200).json({
      status: true,
      message: "Message sent!!",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: false,
      message: "Internal server error!!",
    });
  }
};

module.exports = { home };

const sgMail = require("@sendgrid/mail");
require("dotenv").config();
const sgToken = process.env.SG_API_KEY;

const sendMail = async (email, vfToken) => {
  sgMail.setApiKey(sgToken);

  const url = `http://localhost:3000/api/users/verify/${vfToken}`;
  const msg = {
    to: email,
    from: "mlody13992@gmail.com",
    subject: "Verification token",
    text: `Your verification token: ${url}`,
    html: `<b>Your verification token: <a href="${url}">${url}</a></b>`,
  };

  await sgMail.send(msg);
};

module.exports = { sendMail };

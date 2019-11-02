const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
admin.initializeApp();

exports.sendEmailNotification = functions.database.ref('messages/{message}')
  .onCreate((snap, ctx) => {
    const data = snap.val();

    let authData = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: functions.config().gmail.email,
        pass: functions.config().gmail.password,
      }
    });

    return authData.sendMail({
      from: data.from,
      to: 'james_ross@outlook.fr',
      subject: 'Website contact from ' + data.name,
      text: data.text + '\n\nReply to: ' + data.from,
    }).then(res => console.log('email sent')).catch(err => console.log(err));
  });
const nodemailer = require('nodemailer');
const fs = require('fs');


let mailTransporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'stockupdate7@gmail.com',
		pass: 'xuqmpudkfircecly'
	}
});

let mailDetails = {
	from: 'stockupdate7@gmail.com',
	to: 'stockupdate7@gmail.com',
	subject: 'Test mail',
	//text: 'Node.js testing mail 3 from tejas '
    html: fs.readFileSync('emailHTML.txt','utf8')

};

mailTransporter.sendMail(mailDetails, function(err, data) {
	if(err) {
		console.log(err);
	} else {
		console.log('Email sent successfully');
	}
});

const nodemailer = require("nodemailer");
require("dotenv").config();
const path = require('path');
const transporter = nodemailer.createTransport({
    host:'stmp.gmail.com',
    port:567,
    service:'gmail',
    secure:false,
    auth:{
        user:process.env.user_smtp,
        pass:process.env.pass_smtp,
    }
    })

    const mailOptions ={
    from:pass_smtp,
    to:"naitmihoubimzd@gmail.com",
    subject:`Sending Email using NodeJS`,
    text:'Heyy wassup',
    attachments:{
        filename:'web.jpg',
        path:path.join(__dirname,'web.jpg'),
        contentType: 'image/jpg'
        
    }
    }
    
    transporter.sendMail(mailOptions,function(error, info){
    if(error){
        console.log(error);

    }
    else {
        console.log('Email sent has been sent!');

    }
    
})

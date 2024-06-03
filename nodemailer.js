const nodemailer = require("nodemailer");
const path = require('path');
const transporter = nodemailer.createTransport({
    host:'stmp.gmail.com',
    port:567,
    service:'gmail',
    secure:false,
    auth:{
        user:"philnait2013@gmail.com",
        pass:"gbnz kvps cmtv uzmk",
    }
    })

    const mailOptions ={
    from:"philnait2013@gmail.com",
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
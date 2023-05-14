const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();

//llamamos las respuesta que queremos que nos de..le decimos que llame a router y que de respuesta no da formulario
//render para mostrar una vista
router.get('/',(req, res) => {
    res.render("formulario")
});

//ahora trabajamos con el enviar el formulario, el post es por el method y action= enviar...en const{nombre, mail, mensaje} le pasamos los elementos a tomar del formulario que viene del body
router.post(`/enviar`, async(req, res) =>{
    const{ nombre, email, mensaje}= req.body
//validar formulario(campos), si nombre o email o mensaje tiene algo diferente retorname de formulario error todos los campos son obligatorios
if(!nombre || !email || !mensaje){
    return res.render(`formulario`, {error: `Todos los campos son obligatorios`})
}

//configurar transportardor SMTP, esto se saco de ethereal.email te da datos provisorios para probar

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'yasmin.boyle@ethereal.email',
        pass: '2EPahcwzCHEJwzgjXD'
    }
});
//configurar correo electronico (\n es salto de linea para que llegue ordenado el mail)
const mailOptions = {
    from: email,
    to: `destinatario@ejemplo.com`,
    subject: `formulario de contacto`,
    text: `Nombre: ${nombre}\n  
    Email: ${email}\n 
    Mensaje: ${mensaje}`
}
//estructura de control para manejar errores y excepciones..
try{
    //enviar correo sendmail es enviar correo con la configuracion de maiOptions
    await transporter.sendMail(mailOptions);
    res.render(`Confirmacion`);
}catch (error){
    console.log(error);
    res.render(`Formulario`, {error:`Error al enviar el mensaje`})
}


})


//acordarse de exportar
module.exports = router;


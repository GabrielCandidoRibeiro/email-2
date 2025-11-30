const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const MEU_GMAIL = 'gabriel.cribeiro00@gmail.com';         // <--- Coloque seu Gmail aqui
const MINHA_SENHA_APP = 'lyyn xmzb xirh vbll';   // <--- A Senha de App de 16 dígitos (NÃO É A SENHA DE LOGIN!)
const EMAIL_DESTINO = 'gabriel.cribeiro00@gmail.com';      // <--- O e-mail da pessoa que vai receber

async function dispararEmail() {
  console.log('Lendo arquivo HTML...');
  
  // Procura o index.html na pasta
  const htmlPath = path.join(__dirname, 'index.html');
  
  if (!fs.existsSync(htmlPath)) {
    console.error('ERRO: Arquivo index.html não encontrado!');
    console.error('Rode "MJML: Export HTML" antes de enviar.');
    return;
  }

  const htmlContent = fs.readFileSync(htmlPath, 'utf8');

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: MEU_GMAIL,
      pass: MINHA_SENHA_APP.replace(/\s/g, '') // Remove espaços da senha do email
    }
  });

  console.log(`Enviando e-mail para: ${EMAIL_DESTINO}...`);

  try {
    const info = await transporter.sendMail({
      from: `"PowerComm Security" <${MEU_GMAIL}>`,
      to: EMAIL_DESTINO,
      subject: "PowerComm Weekly: Novidades no Teams e App Mobile",
      html: htmlContent, // O conteúdo do seu e-mail MJML
    });

    console.log('SUCESSO! E-mail enviado.');
    console.log(`ID da Mensagem: ${info.messageId}`);
    
  } catch (erro) {
    console.error('ERRO NO ENVIO:');
    console.error(erro.message);
    
    if (erro.message.includes('Username and Password not accepted')) {
      console.log('Verifique se você usou a "Senha de App" e não sua senha normal.');
      console.log('Link: https://myaccount.google.com/apppasswords');
    }
  }
}

dispararEmail();
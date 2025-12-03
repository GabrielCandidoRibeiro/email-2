Automação de E-mail com MJML & Node.js

Tecnologias Utilizadas:
MJML:Framework para e-mails responsivos.
Node.js: Ambiente de execução.
Nodemailer: Biblioteca para envio de e-mails via SMTP.
VS Code: Editor de código recomendado.

Antes de começar, certifique-se de ter instalado:
1.  [Node.js](https://nodejs.org/) (Versão LTS).
2.  [VS Code](https://code.visualstudio.com/).
3.  Extensão MJML para VS Code** (Busque por "MJML" na loja de extensões).

Caso queira alterar algo no email ou a foto não carregar no primeiro envio:
Entre no arquivo index.mjml, pressione Ctrl + Shift + P (ou Cmd + Shift + P no Mac), digite: MJML: Export HTML e isso ira atualizar o index.html.

Credenciais:
Abra o arquivo enviar.js e você vai encontar as const para colocar os emails e senhas (const MEU_GMAIL;const MINHA_SENHA_APPconst EMAIL_DESTINO), essa 
senha não é a senha do email, é uma senha de app criada na conta google. 

Enviar Email:
Para enviar o email entre na pasta enviar.js (se não estiver nela so colocar cd email no terminal) e dar o comando node enviar.js no terminal.

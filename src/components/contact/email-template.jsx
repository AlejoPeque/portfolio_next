export const EmailTemplate = ({
  email, mensaje
}) => (
  <div>
    <h1>Hola! Alejo</h1>
    <br />
    <p>Este mail se quiere comunicar con vos: {email}</p>
    <br />
    <p>Te dejó este mensaje:</p>
    <br />
    <p>"{mensaje}"</p>
  </div>
);
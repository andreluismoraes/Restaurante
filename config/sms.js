const accountSid = 'AC3e0ae2a929d8bb648742cd7f6c3ddff1';
const authToken = '2101881ba8085b5e44e30d03e1893585';
const client = require('twilio')(accountSid, authToken);

client.messages.create({
     body: 'Teste de sms para o proprio celular',
     from: '+55 19 98443-0891',
     to: '5519984430891'
   })
  .then(message => console.log(message.sid));
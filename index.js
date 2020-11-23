const fs = require('fs');
const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');

const state = require('./controllers/state');

const sessionPath = "./content/content.json";

let sessionData;

if (fs.existsSync(sessionPath)) {
    sessionData = require(sessionPath);
}

let client = new Client({
    session: sessionData
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('authenticated', (session) => {
    state.save(session)
});

client.on('ready', async() => {
    client.getContacts().then(contacts => {
        client.sendMessage(contacts[0].id._serialized, "#1 Teste").then((message) => {
            console.log("message sent", message);
        })
    })
});



client.initialize();
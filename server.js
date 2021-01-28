const express = require('express');
const app = express();
const server = require('http').createServer(app);
const WebSocket = require('ws');
const wss = new WebSocket.Server({ server:server})

wss.on('connection', function connection(ws){
    console.log('Novo cliente conectado!')
    ws.send('Bem vindo!!');
    ws.on('message', function incoming(message){
        console.log('received: %s', message);
        ws.send('Valor do nível da água : ' + message);
    })
})

app.get('/', (req, res)=> res.send('Foi'));
server.listen(3000, () =>console.log('Escutando na porta : 3000'));
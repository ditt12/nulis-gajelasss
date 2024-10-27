const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('User connected');

    socket.on('command', (command) => {
        let response;

        // Ganti dengan perintah yang ingin kamu dukung
        if (command.toLowerCase() === 'halo') {
            response = 'Halo, selamat datang di terminal!';
        } else if (command.toLowerCase() === 'help') {
            response = 'Perintah yang tersedia: halo, help';
        } else {
            response = `Perintah tidak dikenali: ${command}`;
        }

        socket.emit('response', response);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

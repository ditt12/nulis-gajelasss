const socket = io();
const output = document.getElementById('output');
const input = document.getElementById('input');

input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const command = input.value;
        output.innerHTML += `<div>> ${command}</div>`;
        socket.emit('command', command);
        input.value = '';
    }
});

socket.on('response', function (response) {
    output.innerHTML += `<div>${response}</div>`;
    output.scrollTop = output.scrollHeight; // Scroll ke bawah otomatis
});

document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById('output');
    const input = document.getElementById('input');

    const packages = {
        "npm": "NPM (Node Package Manager) has been successfully 'installed'.",
        "curl": "curl has been successfully 'installed'.",
        "git": "git has been successfully 'installed'.",
        "python": "Python has been successfully 'installed'.",
        "node": "Node.js has been successfully 'installed'."
    };

    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const command = input.value;
            output.innerHTML += `<div>> ${command}</div>`;
            
            if (command.startsWith("install ")) {
                const packageName = command.split(" ")[1];
                if (packages[packageName]) {
                    output.innerHTML += `<div>${packages[packageName]}</div>`;
                } else {
                    output.innerHTML += `<div>Package '${packageName}' not found.</div>`;
                }
            } else if (command === "help") {
                output.innerHTML += `<div>Available commands: install [package_name], help</div>`;
            } else {
                output.innerHTML += `<div>Command not found: ${command}</div>`;
            }

            output.scrollTop = output.scrollHeight;
            input.value = '';
        }
    });
});

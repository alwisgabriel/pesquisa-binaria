let minimo = 1;
let maximo = 100;
let chute = 50;

function log(msg) {
    const logDiv = document.getElementById("log");
    logDiv.innerHTML += `<p>${msg}</p>`;
    logDiv.scrollTop = logDiv.scrollHeight;
}

function mostrarChute() {
    document.getElementById("chute").innerText =
        `Seu número é ${chute}?`;
}

function atualizarChute() {
    chute = Math.floor((minimo + maximo) / 2);
    mostrarChute();
    log(`Novo chute: ${chute} (${minimo}-${maximo})`);
}

function mais() {
    minimo = chute + 1;
    atualizarChute();
}

function menos() {
    maximo = chute - 1;
    atualizarChute();
}

function acertou() {
    document.getElementById("pergunta").innerText =
        `Acertei! O número era ${chute}`;
    log(`✔ Acertou: ${chute}`);

    setTimeout(iniciar, 1500);
}

function iniciar() {
    minimo = 1;
    maximo = 100;
    chute = 50;

    document.getElementById("pergunta").innerText =
        "Pense em um número de 1 a 100";
    document.getElementById("log").innerHTML = "";

    mostrarChute();
}

window.onload = iniciar;

const normal = document.getElementById("normal");
const turbo = document.getElementById("turbo");
const validade = document.getElementById("validade");

const gerarBtn = document.getElementById("gerarBtn")

function GerarNovoSinal(){

    gerarBtn.disabled = true;
    gerarBtn.classList.remove("bg-green-500");
    gerarBtn.classList.add("bg-gray-400");

    let normalNum = Math.floor(Math.random() * (15 - 3 + 1)) + 3;
    let turboNum = Math.floor(Math.random() * (15 - 3 + 1)) + 3;
    
    normal.textContent = "NORMAL: " + normalNum + "X";
    turbo.textContent = "TURBO: " + turboNum + "X";

    const agora = new Date();

    agora.setMinutes(agora.getMinutes() + 2);

    const horaFormatada = agora.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
    });
    validade.textContent = "VALIDADE: " + horaFormatada;

    let tempoRestante = 60;
    gerarBtn.textContent = `AGUARDE (${tempoRestante}s...)`;

    const interval = setInterval (() =>{
        tempoRestante--;
        gerarBtn.textContent = `AGUARDE (${tempoRestante}s...)`;

        if(tempoRestante <= 0){
            clearInterval(interval);
            gerarBtn.textContent = "GERAR NOVO SINAL";
            gerarBtn.disabled = false;
            gerarBtn.classList.add("bg-green-500");
            gerarBtn.classList.remove("bg-gray-400");
        }
    }, 1000);


}
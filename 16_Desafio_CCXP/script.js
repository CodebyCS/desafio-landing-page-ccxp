const dia = document.getElementById('day')
const hora = document.getElementById('hour')
const minutos = document.getElementById('minute')
const segundo = document.getElementById('second')

const lancamento = '22 dec 2025'

function countdown(){
    const dataLanc = new Date (lancamento)
    const hoje = new Date()

    const segTotal = (dataLanc - hoje)/1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
    const finalMinutos = Math.floor(segTotal / 60) % 24;
    const finalSegundos = Math.floor(segTotal) % 60;

    dia.innerHTML = `${formatoTempo(finalDias)}D`
    hora.innerHTML = `${formatoTempo(finalHoras)}H`
    minutos.innerHTML = `${formatoTempo(finalMinutos)}M`
    segundo.innerHTML = `${formatoTempo(finalSegundos)}S`
}


function formatoTempo( tempo ){
    return tempo < 10? `0${tempo}` : tempo;
}

countdown();
setInterval(countdown, 1000)

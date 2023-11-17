document.addEventListener('DOMContentLoaded', function () {
    var botaoSom = document.getElementById('somButton');
    var som = new Audio('sound/siuuuuc_78a493d45402729.mp3'); // Substitua pelo caminho do seu arquivo de som

    botaoSom.addEventListener('click', function () {
        if (som.paused) {
            som.play();
            botaoSom.innerHTML = 'Pausar Som';
        } else {
            som.pause();
            som.currentTime = 0;
            botaoSom.innerHTML = 'Clique para Tocar Som';
        }
    });
});

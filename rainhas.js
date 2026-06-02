const N = 4;
let rainhas = [];

function valido(linha, coluna) {

    for (let i = 0; i < linha; i++) {

        let colunaAnterior = rainhas[i];

        if (colunaAnterior === coluna) {
            return false;
        }

        let diferencaLinhas = linha - i;

        if (diferencaLinhas < 0) {
            diferencaLinhas = diferencaLinhas * -1;
        }

        let diferencaColunas = coluna - colunaAnterior;

        if (diferencaColunas < 0) {
            diferencaColunas = diferencaColunas * -1;
        }

        if (diferencaLinhas === diferencaColunas) {
            return false;
        }
    }

    return true;
}

function resolver(linha) {

    if (linha === N) {
        console.log(rainhas);
        return;
    }

    for (let coluna = 0; coluna < N; coluna++) {

        if (valido(linha, coluna)) {

            rainhas[linha] = coluna;

            resolver(linha + 1);
        }
    }
}

resolver(0);
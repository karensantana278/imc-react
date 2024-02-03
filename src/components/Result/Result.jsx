import './Result.css';

export default function Result({ data }) {
    if (!data) {
        return null;
    }

    // Convertendo peso e altura para números
    const peso = parseFloat(data.weight);
    const altura = parseFloat(data.height);

    // Calculando o IMC
    const imc = calcularIMC(peso, altura);

    // Validando o IMC na tabela
    let status;
    if (imc < 18.5) {
        status = 'baixo peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        status = 'intervalo normal';
    } else if (imc >= 25 && imc <= 29.9) {
        status = 'sobrepeso';
    } else if (imc >= 30 && imc <= 34.9) {
        status = 'obesidade classe I';
    } else if (imc >= 35 && imc <= 39.9) {
        status = 'obesidade classe II';
    } else {
        status = 'obesidade classe III';
    }

    // Definindo as classes com base nas condições especificadas
    let resultClass;
    if (status === 'intervalo normal') {
        resultClass = 'success';
    } else if (status === 'baixo peso' || status.startsWith('obesidade')) {
        resultClass = 'danger';
    } else {
        resultClass = 'alert';
    }

    return (
        <section className={`result ${resultClass} mt-5 p-5 rounded`}>
            <p>Valor do IMC: <span>{imc.toFixed(2)}</span></p>
            <p>Classificação: {status}</p>
        </section>
    );
}

// Função para calcular o IMC
function calcularIMC(peso, altura) {
    return peso / Math.pow(altura / 100, 2);
}

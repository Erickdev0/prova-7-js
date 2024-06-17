const calcularGorjeta = (valor, qualidade) => valor * qualidade;

document.getElementById('calcular').onclick = () => {
  const valorConta = parseFloat(document.getElementById('valorConta').value);
  const qualidadeServico = parseFloat(document.getElementById('qualidadeServico').value);
  
  if (!isNaN(valorConta) && !isNaN(qualidadeServico)) {
    const gorjeta = calcularGorjeta(valorConta, qualidadeServico);
    
    document.getElementById('resultado').textContent = `Gorjeta sugerida: R$${gorjeta.toFixed(2)}`;
    
} else {
      document.getElementById('resultado').textContent = 'Por favor, preencha todos os campos.';
}
};

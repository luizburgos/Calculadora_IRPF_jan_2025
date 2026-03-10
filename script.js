document.getElementById("salario").addEventListener("input", function() {
    let valor = this.value.replace(/\D/g, "")
    valor = (parseInt(valor) / 100).toFixed(2)
    this.value = valor
})

function toggleCard() {
    const conteudo = document.querySelector(".conteudo-card")
    const seta = document.getElementById("seta")
    conteudo.classList.toggle("aberto")
    seta.classList.toggle("girando")
}

function faixaIsenta(salario) {
    if (salario <= 2259.20) return 0
    return null
}

function faixa1(salario) {
    if (salario <= 2826.65) return salario * 0.075 - 169.44
    return null
}

function faixa2(salario) {
    if (salario <= 3751.05) return salario * 0.15 - 381.44
    return null
}

function faixa3(salario) {
    if (salario <= 4664.68) return salario * 0.225 - 662.77
    return null
}

function faixa4(salario) {
    return salario * 0.275 - 896.00
}

function calcularImposto(salario) {
    if (faixaIsenta(salario) !== null) return faixaIsenta(salario)
    if (faixa1(salario) !== null) return faixa1(salario)
    if (faixa2(salario) !== null) return faixa2(salario)
    if (faixa3(salario) !== null) return faixa3(salario)
    return faixa4(salario)
}

function calcularAliquota(salario, ir) {
    return (ir / salario) * 100
}

function calcular() {
    const salario = parseFloat(document.getElementById("salario").value)

    if (isNaN(salario) || salario <= 0) {
        document.getElementById("resultado-imposto").textContent = "R$ 0,00"
        document.getElementById("resultado-aliquota").textContent = "0,00%"
        return
    }

    const imposto = calcularImposto(salario)
    const aliquota = calcularAliquota(salario, imposto)

    document.getElementById("resultado-imposto").textContent = "R$ " + imposto.toFixed(2)
    document.getElementById("resultado-aliquota").textContent = aliquota.toFixed(2) + "%"
}

function apagar() {
    document.getElementById("salario").value = ""
    document.getElementById("resultado-imposto").textContent = "R$ 0,00"
    document.getElementById("resultado-aliquota").textContent = "0,00%"
}
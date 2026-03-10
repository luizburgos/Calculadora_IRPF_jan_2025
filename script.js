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

function calcular() {
    const salario = parseFloat(document.getElementById("salario").value)

    if (isNaN(salario) || salario <= 0) {
        document.getElementById("resultado-imposto").textContent = "R$ 0,00"
        document.getElementById("resultado-aliquota").textContent = "0,00%"
        return
    }

    let imposto = 0

    if (salario <= 2259.20) {
        imposto = 0
    } else if (salario <= 2826.65) {
        imposto = salario * 0.075 - 169.44
    } else if (salario <= 3751.05) {
        imposto = salario * 0.15 - 381.44
    } else if (salario <= 4664.68) {
        imposto = salario * 0.225 - 662.77
    } else {
        imposto = salario * 0.275 - 896.00
    }

    let aliquotaEfetiva = (imposto / salario) * 100

    document.getElementById("resultado-imposto").textContent = "R$ " + imposto.toFixed(2)
    document.getElementById("resultado-aliquota").textContent = aliquotaEfetiva.toFixed(2) + "%"
}

function apagar() {
    document.getElementById("salario").value = ""
    document.getElementById("resultado-imposto").textContent = "R$ 0,00"
    document.getElementById("resultado-aliquota").textContent = "0,00%"
}
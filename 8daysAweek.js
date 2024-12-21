let semana = {
    primeiroDia: "domingo",
    segundoDia: "segunda-feira",
    terceiroDia: "terça-feira",
    quartoDia: "quarta-feira", 
    quintoDia: "quinta-feira", 
    sextoDia: "sexta-feira", 
    setimoDia: "sábado"
}

console.log(semana.primeiroDia)

let dias = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]

function descobrirDiaDaSemana(n) {
    return (dias[n - 1])

}
console.log(descobrirDiaDaSemana(2))

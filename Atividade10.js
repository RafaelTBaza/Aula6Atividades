var valorCompra = 99
var membroVip = true
var zonaRural = false

if((valorCompra >= 100 || membroVip == true) && !zonaRural == true){
    console.log("Frete Gratis Aprovado")
} else{
    console.log("Frete Gratis Reprovado")
}
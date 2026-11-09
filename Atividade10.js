var valorCompra = 100
var membroVip = true
var zonaRural = true

if((valorCompra >= 100 || membroVip == true) && !zonaRural == true){
    console.log("Frete Gratis Aprovado")
} else{
    console.log("Frete Gratis Reprovado")
}
const lanzarDados = () => {
    let numbers = []
    let numsArray = Math.round(Math.random() * (25 - 20) + 20) ;
    let max = 9;
    let min = 1;

    for (let i = 0; i < numsArray; i++){
        numbers.push( Math.round((Math.random() * (max - min) + min) ))
    }

    const ordenar = (arrayToOrder) => {
        return arrayToOrder.sort()
    }

    let arrayOrdenada = ordenar(numbers)

    const separar = (arrayOrdenada) => {
        let singulares = {}
        for (let i = 0; i < arrayOrdenada.length; i++) {
            singulares [arrayOrdenada[i]] = i
        }

        for (clave in singulares){
            let contandor = 0
            for (let j = 0; j < arrayOrdenada.length; j++) {
                if (clave == arrayOrdenada[j]) {
                    contandor++
                }
            }
            singulares[clave] = contandor
        }
        return singulares
    }

    let separados = separar(arrayOrdenada)

    const multiplicador = (separados) => {
        let arrayMultiplicados = []
        for ( clave in separados) {
            arrayMultiplicados.push(clave * separados[clave]) 
        }
        return arrayMultiplicados
    }

    const multiplicados = multiplicador(separados)

    const sumador = (array) => {
        let suma = 0
        for (let i = 0; i < array.length; i++) {
            suma += array[i]
        }

        if (suma < 100) {
            suma = (suma + suma) - suma / 2
        }
        return Math.round(suma)
    }

    return sumador(multiplicados)
}

const numerosDistintos = (num1, num2) => {
    const participantes = ["Pepe", "Manuel", "Romelu", "Jesus"]
    let numRandom = Math.round(Math.random() * (3 - 0) + 0) 

    return num1 > num2 ? `Participante ${participantes[numRandom]} || ${num1} > ${num2}` : num2 > num1 ? `Participante ${participantes[numRandom]} || ${num1} < ${num2}` : `Participante ${participantes[numRandom]} tira la lotería ${num1} = ${num2}`
}

console.log(numerosDistintos(lanzarDados(), lanzarDados()))
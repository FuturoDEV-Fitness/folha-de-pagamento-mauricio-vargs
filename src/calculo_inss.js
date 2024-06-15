const readline = require('readline')


    const input = readline.createInterface(
        process.stdin,
        process.stdout
    )

    let salary = 0
    let percent = 0
    let percentage = 0
    let inssValue = 0
    input.question("Qual é o seu Salário? ", (userSalary) => {
        salary = Number(userSalary)
        
        switch(true){
            case salary < 1412: 
                percent = 0.075
                percentage = percent * 100
                inssValue = salary * percent
                console.log(`O valor descontado de INSS foi de R$${inssValue} reais e a sua alíquota foi de ${percentage.toFixed(0)}%`)
                break
            case salary >= 1412 && salary < 2666.68:
                percent = 0.09
                percentage = percent * 100
                inssValue = salary * percent
                console.log(`O valor descontado de INSS foi de R$${inssValue} reais e a sua alíquota foi de ${percentage.toFixed(0)}%`)
                break
            case salary >= 2666.69 && salary < 4000.03:
                percent = 0.12
                percentage = percent * 100
                inssValue = salary * percent
                console.log(`O valor descontado de INSS foi de R$${inssValue} reais e a sua alíquota foi de ${percentage.toFixed(0)}%`)
                break
            case salary >= 4000.04 && salary < 7786.02:
                percent = 0.14
                percentage = percent * 100
                inssValue = salary * percent
                if(inssValue > 908.85){
                    inssValue = 908.85
                }
                console.log(`O valor descontado de INSS foi de R$${inssValue} reais e a sua alíquota foi de ${percentage.toFixed(0)}%`)
                break

            case salary > 7786.02:
                inssValue = 908.85
                console.log(`O valor descontado de INSS foi de R$${inssValue} reais.`)
        }

        input.close()
    })
    

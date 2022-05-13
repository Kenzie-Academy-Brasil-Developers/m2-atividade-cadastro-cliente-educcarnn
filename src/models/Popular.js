import { Api } from "../js/Api.js";
const clientes = await Api.listarClientes()

class Popular {
    static AllDates() {
        clientes.forEach(({ nome }) => {
            const select = document.querySelector('#buscarCliente')

            const option = document.createElement('option')
            option.innerText = nome

            select.appendChild(option)
        })
    }

    static Popular() {
        const firstForm = document.querySelector('#firstDados')
        const genero = document.querySelector('#sexo')
        const selectSpread = [...firstForm]
        const secondForm = document.querySelector('#secondDados')
        const secondSpread = [...secondForm]

        clientes.forEach(({ nome, data_nasc, sexo, email, endereco, telefone_fixo }) => {
            const { masculino, feminino } = sexo
            const { cep, bairro, cidade, estado, numero, rua } = endereco


            const selector = document.querySelector('#buscarCliente').value
            if (selector === nome) {
                selectSpread[0].value = nome
                selectSpread[1].value = data_nasc
                genero.value = sexo
                selectSpread[3].value = email

                secondSpread[0].value = cep
                secondSpread[1].value = rua
                secondSpread[2].value = numero
                secondSpread[3].value = bairro
                secondSpread[4].value = cidade
                secondSpread[5].value = estado

                tel[0].value = telefone_fixo
            }
        })
    }
}

const value = document.querySelector('#inputCliente')
value.addEventListener('click', Popular.Popular)

Popular.AllDates()
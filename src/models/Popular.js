import { Api } from "../js/Api.js";
const clientes = await Api.listarClientes()

const validation = document.querySelector('#validation')
const firstForm = document.querySelector('#firstDados')
const genero = document.querySelector('#sexo')
const selectSpread = [...firstForm]

const secondForm = document.querySelector('#secondDados')
const secondSpread = [...secondForm]

const telSpread = document.querySelector('#telForm')
const tel = [...telSpread]

class Popular {
    static AllDates() {
        clientes.forEach(({ nome, id}) => {
            const select = document.querySelector('#buscarCliente')
    
    
            const option = document.createElement('option')
            option.innerText = nome
         
    
            select.appendChild(option)
        })
    }
    
    static Popular() {
        clientes.forEach(({id,nome, data_nasc, sexo, email, endereco, telefone_fixo }) => {
            const { masculino, feminino } = sexo
            const { cep, bairro, cidade, estado, numero, rua } = endereco
    
            const selector = document.querySelector('#buscarCliente').value
            if (selector === nome) {
                validation.innerHTML = ''
                validation.value = id
    
                selectSpread[0].value = nome
                //selectSpread[0].id = id
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

Popular.AllDates()

const value = document.querySelector('#inputCliente')
value.addEventListener('click', Popular.Popular)

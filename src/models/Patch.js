import { Api } from "../js/Api.js";

const clientes = await Api.listarClientes()

class Patch {
    /*
    static user(elem) {
        elem.forEach(({nome, id}) => {
            const select = document.querySelector('#buscarCliente')
        
            const option = document.createElement('option')
            option.innerText = nome

            option.value = id
            select.appendChild(option)
        })
    }
*/
    static AllDates(){
        clientes.forEach(({nome}) => {
            const select = document.querySelector('#buscarCliente')
        
            const option = document.createElement('option')
            option.innerText = nome

            select.appendChild(option)
        })

    }

    static Preencher(){
    
    const firstForm = document.querySelector('#firstDados')
    const selectSpread = [...firstForm]
    const secondForm = document.querySelector('#secondDados')

    const secondSpread = [...secondForm]

        clientes.forEach(({nome, data_nasc, sexo, email}) => {
            const {masculino, feminino} = sexo
    
            const selector = document.querySelector('#buscarCliente').value
            if(selector === nome) {
                selectSpread[0].value = nome
                selectSpread[1].value = data_nasc
                selectSpread[2].value = masculino || feminino
                selectSpread[3].value = email
            }
        

        })



    }
}


const value = document.querySelector('#inputCliente')
value.addEventListener('click', Patch.Preencher)

Patch.AllDates()

/*
const inputBtn = document.querySelector('#inputCliente')
inputBtn.addEventListener('click', Patch.AllDates)
*/


/*
Adicionar Event no button,

para que percorra cada dados, e preencha os valores automaticamente 

No botão de aditar, percorrer se todos os dados são iguais, caso não seja, fazer a modificação
*/
Api.editarCliente()


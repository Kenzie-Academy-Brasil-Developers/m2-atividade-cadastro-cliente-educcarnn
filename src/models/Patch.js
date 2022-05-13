import { Api } from "../js/Api.js";

const clientes = await Api.listarClientes()

const telSpread = document.querySelector('#telForm')
const tel = [...telSpread]

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
    
    static Verify() {
        let obj = {}

     clientes.forEach(({id}) =>{
        console.log(clientes.id)
     
     })  
    }
}

const btn = document.querySelector('#edit')
btn.addEventListener('click', Patch.Verify)
/*
const inputBtn = document.querySelector('#inputCliente')
inputBtn.addEventListener('click', Patch.AllDates)
*/


/*
Adicionar Event no button,

para que percorra cada dados, e preencha os valores automaticamente 

No botão de aditar, percorrer se todos os dados são iguais, caso não seja, fazer a modificação
*/



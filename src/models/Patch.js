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

class Patch {
static Verify() {
     clientes.forEach(({id, nome, data_nasc, sexo, email, endereco, telefone_fixo}) => {
        const { masculino, feminino } = sexo
        const { cep, bairro, cidade, estado, numero, rua } = endereco

          if(id === Number(validation.value)) {
                if(nome !== selectSpread[0].value) {
                    Api.editarCliente(id, {nome: selectSpread[0].value})
                } 
                if(data_nasc !== selectSpread[1].value) {
                    Api.editarCliente(id, {data_nasc: selectSpread[1].value})
                }
                if(sexo !== genero.value) {
                    Api.editarCliente(id, {sexo: genero.value})
                }
                if(email !== selectSpread[3].value) {
                    Api.editarCliente(id, {email: selectSpread[3].value})
                }
                
          }
        
    })

}
}

const btn = document.querySelector('#edit')
btn.addEventListener('click', Patch.Verify)




import { Api } from "../js/Api.js";

const clientes = await Api.listarClientes()

const validation = document.querySelector('#validation')
const secondValidation = document.querySelector('#secondValidation')
const firstForm = document.querySelector('#firstDados')
const genero = document.querySelector('#sexo')
const selectSpread = [...firstForm]

const secondForm = document.querySelector('#secondDados')
const secondSpread = [...secondForm]

const telSpread = document.querySelector('#telForm')
const idTel = document.querySelector('#idTel')
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
        
          if(id === Number(secondValidation.value)){
              if(cep !== secondSpread[0].value) {
                    Api.editarCliente(id, {cep: secondSpread[0].value})
              }
              if(rua !== secondSpread[1].value) {
                Api.editarCliente(id, {rua: secondSpread[1].value})
              }
              if(numero !== secondSpread[2].value) {
                Api.editarCliente(id, {numero: secondSpread[2].value})
              }
              if(bairro !== secondSpread[3].value) {
                  Api.editarCliente(id, {bairro: secondSpread[3].value})
              }
              if(estado !== secondSpread[4].value) {
                  Api.editarCliente(id, {estado: secondSpread[4].value})
              }
              if(cidade !== secondSpread[5].value) {
                  Api.editarCliente(id, {cidade: secondSpread[5].value})
              }
          }

          if(id === Number(idTel.value)) {
            if(telefone_fixo !== tel[0].value) {
                Api.editarCliente(id, {telefone_fixo: tel[0].value})
            }
          }
        
    })

}
}

const btn = document.querySelector('#edit')
btn.addEventListener('click', Patch.Verify)




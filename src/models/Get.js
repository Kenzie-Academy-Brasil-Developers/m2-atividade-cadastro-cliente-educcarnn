import { Api } from "../js/Api.js";

const clientes = await Api.listarClientes()
const listaClientes  = document.querySelector("ul")

class Get {
    static templateClientes(item){

        item.forEach(({nome,cpf, idade,data_nasc,sexo,email,endereco,telefone_fixo, pedidos})=>{
            const {cep,rua,numero,bairro,cidade,estado} = endereco
         
            const li = document.createElement("li")
            
            li.innerHTML = `
                <p>Nome: ${nome}</p>
                <p>Idade: ${idade}</p>
                <p>CPF: ${cpf}</p>
                <p>Data de nascimento: ${data_nasc}</p>
                <p>Sexo: ${sexo}</p>
                <p>E-mail: ${email}</p>
                <p>Telefone: ${telefone_fixo}</p>
                <p>Pedidos: ${pedidos} </p>
      
                <h3>Endereço:</h3>
                <p>CEP: ${cep}</p>
                <p>Rua: ${rua}</p>
                <p>Numero: ${numero}</p>
                <p>Bairro: ${bairro}</p>
                <p>Cidade: ${cidade}</p>
                <p>Estado: ${estado}</p>
            `
            
            listaClientes.appendChild(li)
        })
      
      }
      
}

Get.templateClientes(clientes)



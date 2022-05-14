import { Api } from "../js/Api.js";

const clientes = await Api.listarClientes()

const form = document.querySelector('#buscarCliente')

const btn = document.querySelector('#idBuscar')

class Delete{
    static pull(lista){
        lista.forEach(({nome, id}) =>{
            const option = document.createElement('option')
            option.innerText = nome
            option.value = id
        
           
            form.appendChild(option)
        })
    }

    static method() {
     
        clientes.forEach(({nome, id}) => {
            //console.log(id)
            const idGeral = [...form.value]
           
            if(Number(idGeral) === id) {
                console.log(Number(idGeral))
                //Api.deletarCliente(id)
            }
           

            
          
        })
        
   
    }
}
Delete.pull(clientes)
btn.addEventListener('click', Delete.method)
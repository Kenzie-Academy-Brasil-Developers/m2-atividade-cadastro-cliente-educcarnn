import { Api } from "../js/Api.js";

const clientes = await Api.listarClientes()



class Patch {
    static metodo(elem) {
        elem.forEach(({nome}) => {
            const select = document.querySelector('#buscarCliente')
        
            const option = document.createElement('option')
            option.innerText = nome

            select.appendChild(option)
        })
    }
}
Patch.metodo(clientes)
Api.editarCliente()


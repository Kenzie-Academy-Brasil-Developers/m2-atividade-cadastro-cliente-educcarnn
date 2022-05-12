import { Api } from "../js/Api.js";

const clientes = await Api.listarClientes()
const select = document.querySelector('button')

console.log(select)

class Patch {
    static metodo(item) {

        item.forEach(() => {

        })

    }
}

Api.editarCliente(Patch.metodo())


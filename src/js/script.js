const form = document.querySelector('form')

class Prevent {
    static default(e) {
        e.preventDefault()
    }
}
addEventListener('submit', Prevent.default)

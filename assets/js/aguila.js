import Animal from "./animal.js";

class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    chillar() {
        return "assets\sounds\Chillido.mp3"
    }
}

export default Aguila
import Animal from "./animal.js";

class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    sisear() {
        return "assets\sounds\Siseo.mp3"
    }
}

export default Serpiente 
class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    toatake(){

        let atake;

        switch(this.tipo){

            case "Guerreiro":
            atake = "espeda"
            console.log(`O ${this.tipo} atacou usando ${atake}!`);
            break;

            case "Mago":
            atake = "magia"
            console.log(`O ${this.tipo} atacou usando ${atake}!`)
            break;

            case "Monge":
            atake = " artes marciais"
            console.log(`O ${this.tipo} atacou usando ${atake}!`)
            break;

            case "Ninja":
            atake = "shuriken"
            console.log(`O ${this.tipo} atacou usando ${atake}!`)
            break;

        }
    }
}

const atakeHeroi0 = new Heroi ("ZéDroguinha", 21, "Guerreiro");
const atakeHeroi1 = new Heroi ("LuanSantano", 45, "Mago");
const atakeHeroi2 = new Heroi ("PaoComOvo", 89, "Monge");
const atakeHeroi3 = new Heroi ("JoaoDasLaminas", 33, "Ninja");

atakeHeroi0.toatake()
atakeHeroi1.toatake()
atakeHeroi2.toatake()
atakeHeroi3.toatake()
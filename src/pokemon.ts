export class Pokemon {
    name: string;
    speed: number;

    constructor(name: string, speed: number) {
        this.name = name;
        this.speed = speed;
    }

    static firstAttacker(pokemon1: Pokemon, pokemon2: Pokemon) {
        return pokemon1.speed < pokemon2.speed ? pokemon2 : pokemon1;
    }
}

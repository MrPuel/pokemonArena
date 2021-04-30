import {Attack} from "./attack";

export class Pokemon {
    name: string;
    hp: number;
    speed: number;
    attacks: Attack[];

    constructor(name: string, hp: number, speed: number, attacks: Attack[]) {
        this.name = name;
        this.hp = hp;
        this.speed = speed;
        this.attacks = attacks;
    }

    static firstAttacker(pokemon1: Pokemon, pokemon2: Pokemon): Pokemon {
        return pokemon1.speed < pokemon2.speed ? pokemon2 : pokemon1;
    }

    attack(opponent: Pokemon, attackId: number, random: number = Math.random()): void {
        if (attackId > this.attacks.length) {
            return;
        }
        const multiplier = random > 0.9 ? 2 : 1;
        const move = this.attacks[attackId];
        opponent.hp -= move.damage * multiplier;
        if (opponent.hp < 0) {
            opponent.hp = 0;
        }
    }
}

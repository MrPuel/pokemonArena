import {Pokemon} from "../src/pokemon";
import {Attack} from "../src/attack";

const basicAttack = new Attack("tackle", 35);

export const pikachu = new Pokemon(
    "pikachu",
    100,
    90,
    [
        basicAttack,
        new Attack("huracan", 90)
    ]);
export const dracofeu = new Pokemon(
    "dracofeu",
    80,
    160,
    [
        basicAttack,
        new Attack("slash", 80)
    ]);
export const carapute = new Pokemon(
    "carapute",
    130,
    90,
    [
        basicAttack,
        new Attack("zebi", 75)
    ]);

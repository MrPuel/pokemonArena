import {Pokemon} from "../src/pokemon";
import {pikachu, dracofeu, carapute} from "./data";

describe("pokemon", () => {
    let random = () => 0.2;

    test("test name", () => {
        expect(pikachu.name).toBe("pikachu");
    });

    test("test correct attacker", () => {
        expect(Pokemon.firstAttacker(pikachu, dracofeu)).toBe(dracofeu);
    });

    test("test first attack with speed", () => {
        expect(Pokemon.firstAttacker(pikachu, carapute)).toBe(pikachu);
    });

    test("test hp", () => {
        pikachu.attack(dracofeu, 0, random());
        expect(dracofeu.hp).toBe(45);
    });


});

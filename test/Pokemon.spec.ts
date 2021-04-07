import {Pokemon} from "../src/pokemon";

const pikachu = new Pokemon("pikachu", 100);
const ninjask = new Pokemon("ninjask", 999);

test("should be correctly named", () => {
    expect(pikachu.name).toBe("pikachu");
});

test("should get correct attacker", () => {
    expect(Pokemon.firstAttacker(pikachu, ninjask)).toBe(ninjask);
});

test("should get correct attacker when speed is equal", () => {
    const kicklee = new Pokemon("kicklee", 100);
    expect(Pokemon.firstAttacker(pikachu, kicklee)).toBe(pikachu);
});

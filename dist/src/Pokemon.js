"use strict";
exports.__esModule = true;
exports.Pokemon = void 0;
var Pokemon = /** @class */ (function () {
    function Pokemon(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    Pokemon.firstAttacker = function (pokemon1, pokemon2) {
        return pokemon1.speed < pokemon2.speed ? pokemon2 : pokemon1;
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;

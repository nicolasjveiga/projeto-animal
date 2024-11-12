"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("./Animal"));
class AnimalPecuaria extends Animal_1.default {
    getWeight() {
        return this.weight;
    }
    setWeight(weight) {
        this.weight = weight;
    }
}
exports.default = AnimalPecuaria;

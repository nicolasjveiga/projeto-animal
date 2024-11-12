"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("../model/Animal"));
const AnimalDomestico_1 = __importDefault(require("../model/AnimalDomestico"));
const AnimalPecuaria_1 = __importDefault(require("../model/AnimalPecuaria"));
const AnimalSilvestre_1 = __importDefault(require("../model/AnimalSilvestre"));
class AnimalController {
    constructor(db) {
        this.db = db;
    }
    getNewAnimal() {
        return new Animal_1.default();
    }
    getNewAnimalDomestico() {
        return new AnimalDomestico_1.default();
    }
    getNewAnimalPecuaria() {
        return new AnimalPecuaria_1.default();
    }
    getNewAnimalSilvestre() {
        return new AnimalSilvestre_1.default();
    }
    registerNewAnimal(animal) {
        this.db.addNewAnimal(animal);
    }
    registerNewAnimalDomestico(animalDomestico) {
        this.db.addNewAnimal(animalDomestico);
    }
    registerNewAnimalPecuaria(animalPecuaria) {
        this.db.addNewAnimal(animalPecuaria);
    }
    registerNewAnimalSilvestre(animalSilvestre) {
        this.db.addNewAnimal(animalSilvestre);
    }
}
exports.default = AnimalController;

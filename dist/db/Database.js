"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("../model/Animal"));
const Owner_1 = __importDefault(require("../model/Owner"));
class Database {
    constructor() {
        this.animals = [];
        this.owners = [];
        this.addresses = [];
    }
    //método para retornar uma lista com todos os animais
    getAllAnimals() {
        return this.animals;
    }
    addNewAnimal(animal) {
        this.animals.push(animal);
    }
    getAnimalByIndex(index) {
        return this.animals[index];
    }
    getAnimalByName(name) {
        for (let i = 0; i < this.animals.length; i++) {
            if (this.animals[i].getName() == name) {
                return this.animals[i];
            }
        }
        console.log("Nenhum animal com este nome foi encotrado");
        return new Animal_1.default();
    }
    addNewOwner(owner) {
        this.owners.push(owner);
    }
    getOwnerByIndex(index) {
        return this.owners[index];
    }
    getOwnerByName(name) {
        for (let i = 0; i < this.owners.length; i++) {
            if (this.owners[i].getName() == name) {
                return this.owners[i];
            }
        }
        console.log("Nenhum proprietário com este nome foi encontrado");
        return new Owner_1.default();
    }
}
exports.default = Database;

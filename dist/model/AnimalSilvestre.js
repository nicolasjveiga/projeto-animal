"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("./Animal"));
class AnimalSilvestre extends Animal_1.default {
    getArrivalDate() {
        return this.arrivalDate;
    }
    setArrivalDate(arrivalDate) {
        this.arrivalDate = arrivalDate;
    }
    getDescription() {
        return this.description;
    }
    setDescription(description) {
        this.description = description;
    }
}
exports.default = AnimalSilvestre;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Owner_1 = __importDefault(require("../model/Owner"));
class OwnerController {
    constructor(db) {
        this.db = db;
    }
    getNewOwner() {
        return new Owner_1.default();
    }
    registerNewOwner(owner) {
        this.db.addNewOwner(owner);
    }
}
exports.default = OwnerController;

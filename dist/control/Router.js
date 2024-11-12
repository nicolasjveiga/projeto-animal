"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(require("../db/Database"));
const PrimayScreen_1 = __importDefault(require("../view/PrimayScreen"));
const AnimalController_1 = __importDefault(require("./AnimalController"));
const OwnerController_1 = __importDefault(require("./OwnerController"));
class Router {
    getDatabase() {
        return this.db;
    }
    constructor() {
        //esta será a única instância de database do sistema
        this.db = new Database_1.default();
        this.ps = new PrimayScreen_1.default(this);
        this.animalController = new AnimalController_1.default(this.db);
        this.ownerController = new OwnerController_1.default(this.db);
        this.ps.getFirstScreen();
    }
}
exports.default = Router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class OwnerScreen {
    constructor(router) {
        this.prompt = (0, prompt_sync_1.default)();
        this.router = router;
    }
    registerOwner() {
        let owner = this.router.ownerController.getNewOwner();
        let ownerName = this.prompt("Digite o nome do dono: ");
        owner.setName(ownerName);
        let ownerPhone = this.prompt("Digite o número de telefone do dono: ");
        owner.setPhone(ownerPhone);
        this.router.ownerController.registerNewOwner(owner);
    }
}
exports.default = OwnerScreen;

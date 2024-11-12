"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const AnimalScreen_1 = __importDefault(require("./AnimalScreen"));
const OwnerScreen_1 = __importDefault(require("./OwnerScreen"));
class PrimaryScreen {
    constructor(router) {
        this.prompt = (0, prompt_sync_1.default)();
        this.router = router;
        this.animalScreen = new AnimalScreen_1.default(this.router);
        this.ownerScreen = new OwnerScreen_1.default(this.router);
    }
    getFirstScreen() {
        let showScreen = true;
        while (showScreen) {
            // Apresenta o menu principal
            let choice = this.prompt("Escolha:\n1 - Cadastro \n2 - Listar\n3 - Atualizar\n4 - Apagar\n5 - Sair\n");
            switch (choice) {
                case "1":
                    let choice2 = this.prompt("Escolha Cadastrar:\n1 - Animais\n2 - Proprietários\n");
                    if (choice2 === "1") {
                        let choice3 = this.prompt("Escolha o tipo de Animal:\n1 - Animal Doméstico\n2 - Animal Pecuária\n3 - Animal Silvestre\n");
                        switch (choice3) {
                            case "1":
                                this.animalScreen.registerAnimalDomestico();
                                break;
                            case "2":
                                this.animalScreen.registerAnimalPecuaria();
                                break;
                            case "3":
                                this.animalScreen.registerAnimalSilvestre();
                                break;
                            default:
                                console.log("Opção inválida para tipo de animal.");
                                break;
                        }
                    }
                    else if (choice2 === "2") {
                        this.ownerScreen.registerOwner();
                    }
                    else {
                        console.log("Opção inválida para cadastro.");
                    }
                    break;
                case "2":
                    this.animalScreen.listAnimals();
                    break;
                case "3":
                    console.log("Digitou 3 para Atualizar");
                    break;
                case "4":
                    console.log("Digitou 4 para Apagar");
                    break;
                case "5":
                    console.log("Saindo...");
                    showScreen = false;
                    break;
                default:
                    console.log("Opção inválida! Tente novamente.");
                    break;
            }
        }
    }
}
exports.default = PrimaryScreen;

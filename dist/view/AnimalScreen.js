"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class AnimalScreen {
    constructor(router) {
        this.prompt = (0, prompt_sync_1.default)();
        this.router = router;
    }
    // este método requisita as informações para cadastro de animais
    registerAnimal() {
        // para registar um novo animal, precisamos da estrutura
        // de dados de um animal "Animal.ts"
        let animal = this.router.animalController.getNewAnimal();
        let animalName = this.prompt("Digite o nome do animal: ");
        animal.setName(animalName);
        //peço o nome
        let animalBreed = this.prompt("Digite a raça do animal: ");
        animal.setBreed(animalBreed);
        //peço a raça
        // Este é para chamar o AnimalController para gravar o animal no banco
        this.router.animalController.registerNewAnimal(animal);
    }
    registerAnimalDomestico() {
        let animalDomestico = this.router.animalController.getNewAnimalDomestico();
        let animalDomesticoPetshop = this.prompt("Digite o Petshop do animal: ");
        animalDomestico.setPetshop(animalDomesticoPetshop);
        this.router.animalController.registerNewAnimalDomestico(animalDomestico);
    }
    registerAnimalPecuaria() {
        let animalPecuaria = this.router.animalController.getNewAnimalPecuaria();
        let animalPecuariaWeight = this.prompt("Digite o peso do animal: ");
        animalPecuaria.setWeight(animalPecuariaWeight);
        this.router.animalController.registerNewAnimalPecuaria(animalPecuaria);
    }
    registerAnimalSilvestre() {
        let animalSilvestre = this.router.animalController.getNewAnimalSilvestre();
        let animalSilvestreArrivalDate = this.prompt("Digite a data de chegada do animal: ");
        animalSilvestre.setArrivalDate(animalSilvestreArrivalDate);
        let animalSilvestreDescription = this.prompt("Descrição do motivo de ter sido resgatado: ");
        animalSilvestre.setDescription(animalSilvestreDescription);
    }
    listAnimals() {
        const animals = this.router.getDatabase().getAllAnimals();
        if (animals.length === 0) {
            console.log("Nenhum animal cadastrado.");
        }
        else {
            console.log("Lista de Animais Cadastrados:");
            animals.forEach((animal, index) => {
                console.log(`\nAnimal ${index + 1}`);
                console.log(`Nome: ${animal.getName()}`);
            });
        }
    }
}
exports.default = AnimalScreen;

import PromptSync from "prompt-sync";
import Router from "../control/Router";
import Animal from "../model/Animal";
import AnimalDomestico from "../model/AnimalDomestico";
import AnimalPecuaria from "../model/AnimalPecuaria";
import AnimalSilvestre from "../model/AnimalSilvestre";

export default class AnimalScreen {
    
    private prompt = PromptSync();
    private router!: Router;

    constructor(router: Router) {
        this.router = router;
    }

    // este método requisita as informações para cadastro de animais
    public registerAnimal(): void {
        // para registar um novo animal, precisamos da estrutura
        // de dados de um animal "Animal.ts"
        let animal: Animal = this.router.animalController.getNewAnimal();
        let animalName = this.prompt("Digite o nome do animal: ");
        animal.setName(animalName);
        //peço o nome
        let animalBreed = this.prompt("Digite a raça do animal: ");
        animal.setBreed(animalBreed);
        //peço a raça

        // Este é para chamar o AnimalController para gravar o animal no banco
        this.router.animalController.registerNewAnimal(animal);
    }

    public registerAnimalDomestico(): void{
        let animalDomestico: AnimalDomestico = this.router.animalController.getNewAnimalDomestico();
    
        let animalDomesticoPetshop = this.prompt("Digite o Petshop do animal: ");
        animalDomestico.setPetshop(animalDomesticoPetshop);

        this.router.animalController.registerNewAnimalDomestico(animalDomestico);
    }

    public registerAnimalPecuaria(): void {
        let animalPecuaria: AnimalPecuaria = this.router.animalController.getNewAnimalPecuaria();

        let animalPecuariaWeight = this.prompt("Digite o peso do animal: ");
        animalPecuaria.setWeight(animalPecuariaWeight);
    
        this.router.animalController.registerNewAnimalPecuaria(animalPecuaria);
    }

    public registerAnimalSilvestre(): void {
        let animalSilvestre: AnimalSilvestre = this.router.animalController.getNewAnimalSilvestre();

        let animalSilvestreArrivalDate = this.prompt("Digite a data de chegada do animal: ");
        animalSilvestre.setArrivalDate(animalSilvestreArrivalDate);

        let animalSilvestreDescription = this.prompt("Descrição do motivo de ter sido resgatado: ")
        animalSilvestre.setDescription(animalSilvestreDescription);
    }
    
    public listAnimals(): void {
        const animals: Animal[] = this.router.getDatabase().getAllAnimals();

        if (animals.length === 0) {
            console.log("Nenhum animal cadastrado.");
        } else {
            console.log("Lista de Animais Cadastrados:");
            animals.forEach((animal, index) => {   
               console.log(`\nAnimal ${index + 1}`)
               console.log(`Nome: ${animal.getName()}`) 
            })
        }
    }

}   
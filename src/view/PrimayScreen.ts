import promptSync from "prompt-sync";
import AnimalScreen from "./AnimalScreen";
import OwnerScreen from "./OwnerScreen";
import Router from "../control/Router";

export default class PrimaryScreen {

    private prompt = promptSync();
    private animalScreen!: AnimalScreen;
    private ownerScreen!: OwnerScreen;
    private router!: Router;

    constructor(router: Router) {
        this.router = router;
        this.animalScreen = new AnimalScreen(this.router);
    }

    public getFirstScreen(): void {
        let showScreen: boolean = true;
        
        while (showScreen) {
            
            let choice = this.prompt(
                "Escolha:\n1 - Cadastro \n2 - Listar\n3 - Atualizar\n4 - Apagar\n5 - Sair\n"
            );

            switch (choice) {
                case "1":
                    let choice2 = this.prompt("Escolha Cadastrar:\n1 - Animais\n2 - Proprietários\n");    
                    switch (choice2) {
                        case "1":
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
                            break;  
                        case "2":
                            this.ownerScreen.registerOwner();
                            break;
                        default:
                            console.log("Opção inválida para cadastro.");
                            break;
                    }
                    break;  

                case "2":
                    this.animalScreen.listAnimals();
                    break;
                
                case "3":
                    console.log("Digitou 3");
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

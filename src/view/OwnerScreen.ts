import PromptSync from "prompt-sync";
import Router from "../control/Router";
import Owner from "../model/Owner";

export default class OwnerScreen{

    private prompt = PromptSync();
    private router!: Router;

    constructor(router: Router){
        this.router = router
    }

    public registerOwner(): void{
        
        let owner: Owner = this.router.ownerController.getNewOwner();
        let ownerName = this.prompt("Digite o nome do dono: ");
        owner.setName(ownerName);

        let ownerPhone = this.prompt("Digite o número de telefone do dono: ");
        owner.setPhone(ownerPhone);

        this.router.ownerController.registerNewOwner(owner);
        
    
    }
}
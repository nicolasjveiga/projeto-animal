import Database from "../db/Database";
import Animal from "../model/Animal";
import PrimaryScreen from "../view/PrimayScreen";
import AnimalController from "./AnimalController";
import OwnerController from "./OwnerController";

export default class Router{
    
    //esta será a única instância de database do sistema
    private db: Database = new Database();
    private ps: PrimaryScreen = new PrimaryScreen(this);
    public animalController: AnimalController = new AnimalController(this.db);
    public ownerController: OwnerController = new OwnerController(this.db);
    
    public getDatabase(): Database{
        return this.db;
    }
    
    constructor(){
        this.ps.getFirstScreen();
    }
}
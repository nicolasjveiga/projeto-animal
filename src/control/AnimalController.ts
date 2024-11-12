import Database from "../db/Database";
import Animal from "../model/Animal";
import AnimalDomestico from "../model/AnimalDomestico";
import AnimalPecuaria from "../model/AnimalPecuaria";
import AnimalSilvestre from "../model/AnimalSilvestre";

export default class AnimalController {

    private db!: Database;

    constructor(db: Database) {
        this.db = db;
    }


    public getNewAnimal(): Animal {
        return new Animal();
    }
    public getNewAnimalDomestico(): AnimalDomestico {
      return new AnimalDomestico();
    }
    public getNewAnimalPecuaria(): AnimalPecuaria {
        return new AnimalPecuaria();
    }
    public getNewAnimalSilvestre(): AnimalSilvestre {
        return new AnimalSilvestre();
    }
    
    public registerNewAnimal(animal: Animal): void {
       this.db.addNewAnimal(animal);
    }
    public registerNewAnimalDomestico(animalDomestico: AnimalDomestico): void {
        this.db.addNewAnimal(animalDomestico);
    }
    public registerNewAnimalPecuaria(animalPecuaria: AnimalPecuaria): void{
        this.db.addNewAnimal(animalPecuaria);
    }
    public registerNewAnimalSilvestre(animalSilvestre: AnimalSilvestre): void{
        this.db.addNewAnimal(animalSilvestre);
    }

}
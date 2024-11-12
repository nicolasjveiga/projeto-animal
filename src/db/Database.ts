import Address from "../model/Address";
import Animal from "../model/Animal";
import Owner from "../model/Owner";


export default class Database{
    
    private animals: Animal[] = [];
    private owners: Owner[] = [];
    private addresses: Address[] = [];

    //método para retornar uma lista com todos os animais
    public getAllAnimals(): Animal[]{
        return this.animals
    }
    
    public addNewAnimal(animal: Animal): void{
        this.animals.push(animal);
    }
    public getAnimalByIndex(index: number): Animal{
       return this.animals[index];
    }
    public getAnimalByName(name: string): Animal{
        for (let i = 0; i < this.animals.length; i++) {
            if(this.animals[i].getName() == name){
                return this.animals[i];
            }
        }
        console.log("Nenhum animal com este nome foi encotrado");
        return new Animal();
    }
    
    public addNewOwner(owner: Owner): void{
        this.owners.push(owner);
    }
    public getOwnerByIndex(index: number): Owner{
        return this.owners[index];
    }
    public getOwnerByName(name: string): Owner{
        for (let i = 0; i < this.owners.length; i++) {
            if(this.owners[i].getName() == name){
                return this.owners[i];
            }
        }
        console.log("Nenhum proprietário com este nome foi encontrado")
        return new Owner();
    }




}
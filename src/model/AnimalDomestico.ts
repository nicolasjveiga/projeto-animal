import Animal from "./Animal";

export default class AnimalDomestico extends Animal{

    private petshop!: string;
    
    public getPetshop(): string{
        return this.petshop
    }

    public setPetshop(petshop: string): void{
        this.petshop = petshop;
    }
}
import Animal from "./Animal";

export default class AnimalPecuaria extends Animal{

    private weight!: string;
    
    public getWeight(): string{
        return this.weight
        }

    public setWeight(weight: string): void{
        this.weight = weight
    }

    
}
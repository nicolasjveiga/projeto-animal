import Animal from "./Animal";

export default class AnimalSilvestre extends Animal{
    
    private arrivalDate!: string;
    private description!: string;


    public getArrivalDate(): string{
        return this.arrivalDate;
    }
    public setArrivalDate(arrivalDate: string): void{
        this.arrivalDate = arrivalDate;
    }

    public getDescription(): string {
        return this.description;
    }
    public setDescription(description: string): void{
        this.description = description;
    }
}
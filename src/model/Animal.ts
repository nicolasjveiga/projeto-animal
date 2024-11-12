export default class Animal {
    private name!: string;
    private specie!: string;
    private breed!: string;
    private gender!: string;

    public getName(): string {
        return this.name;
    }
    public setName(name: string): void {
        this.name = name;
    }
    public getSpecie(): string {
        return this.specie;
    }
    public setSpecie(specie: string): void {
        this.specie = specie;
    }
    public getGender(): string {
        return this.gender;
    }
    public setGender(gender: string): void {
        this.gender = gender;
    }
    public getBreed(): string {
        return this.breed;
    }
    public setBreed(breed: string): void {
        this.breed = breed;
    }
}
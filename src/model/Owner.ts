export default class Owner {
    private name!: string;
    private phone!: string;

    public getName(): string{
        return this.name;
    }
    public setName(name: string): void{
        this.name = name;
    }

    public getPhone(): string{
        return this.phone;
    }
    public setPhone(phone: string): void{
        this.phone = phone;
    }
}
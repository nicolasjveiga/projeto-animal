import Database from "../db/Database";
import Owner from "../model/Owner";

export default class OwnerController{

    private db!: Database;

    constructor(db: Database){
        this.db = db;
    }

    public getNewOwner(): Owner{
        return new Owner();
    }

    public registerNewOwner(owner: Owner): void{
        this.db.addNewOwner(owner);
    }

}
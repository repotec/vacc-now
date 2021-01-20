export class Branch{
    public branchId: number;
    public name: string;
    public description: string;

    constructor(branchId: number, name: string, description: string){
        this.branchId = branchId;
        this.name = name;
        this.description = description;
    }
}
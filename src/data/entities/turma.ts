export class Turma {
    public readonly id: string;
    public codigo: string;
    public descricao: string;
    public nome: string;
    

    constructor(props: Omit<Turma, 'id'>, id?: string){
        Object.assign(this, props);
    }
}
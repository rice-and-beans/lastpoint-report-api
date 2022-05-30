export class Disciplina {
    public readonly id: string;
    public codigo: string;
    public descricao: string;
    public nome: string;
    
    constructor(props: Omit<Disciplina, 'id'>, id?: string){
        Object.assign(this, props);
    }
}
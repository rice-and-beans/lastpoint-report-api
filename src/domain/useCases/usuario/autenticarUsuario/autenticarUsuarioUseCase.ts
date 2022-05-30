import { IUsuarioRepository } from "../../../repositories/usuarioRepository";
import { IAutenticacaoUsuarioDTO } from "../../../model/usuario/autenticacaoUsuarioDTO";

export class AutenticarUsuarioUseCase {

    constructor(
        private usuarioRepository: IUsuarioRepository,
    ){}

    async execute(data: IAutenticacaoUsuarioDTO){
        const resp = tokenUtil.verificarToken(data.token, listaTokensInvalidos);
    
        if(resp != null && resp.err != null){
            return res.status(401).end();
        }else{
            const index = listaTokensInvalidos.findIndex(item => item === data.token);
            if(index !== -1){
                return res.status(401).end();
            }
        }
        
    }

}
import { Router } from "express";
import { criarUsuarioController } from "../controllers/usuario/criarUsuario";

const router = Router();

router.post('/', autenticar, async (request, response) => {
    return await criarUsuarioController.handle(request, response);
});

router.get('/', autenticar,  async (request, response) => {
    return await criarUsuarioController.handle(request, response);
});

router.put('/', autenticar, async (request, response) => {
    return await criarUsuarioController.handle(request, response);
});

router.delete('/', autenticar, async (request, response) => {
    return await criarUsuarioController.handle(request, response);
});

function autenticar(next){
    
    next();
}

export { router as usuario };
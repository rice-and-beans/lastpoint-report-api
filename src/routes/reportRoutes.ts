import { Router } from "express";
import { gerarRelatorioController } from "../controllers/report/geraRelatorio";

const router = Router();

router.get('/RP1', async(request, response) =>  
{
    return await gerarRelatorioController.handle(request, response);
})

export { router as report };
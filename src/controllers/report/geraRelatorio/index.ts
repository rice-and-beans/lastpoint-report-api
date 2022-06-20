import { gerarRelatorioUseCase } from "../../../domain/useCases/relatorio";
import { GeraRelatorioController } from "../geraRelatorio/geraRelatorioController";

const gerarRelatorioController = new GeraRelatorioController(gerarRelatorioUseCase);

export { gerarRelatorioController }
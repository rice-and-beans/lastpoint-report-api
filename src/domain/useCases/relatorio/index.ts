import { GeraRelatorioUseCase } from "../relatorio/geraRelatorioUseCase";
import { ValidaParamObrigatorios } from "../../validations/common/validaParamObrigatorio";

const validaParamObrigatorio = new ValidaParamObrigatorios();

const gerarRelatorioUseCase = new GeraRelatorioUseCase(validaParamObrigatorio);

export {gerarRelatorioUseCase};

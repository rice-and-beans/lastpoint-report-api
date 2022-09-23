import { GeraRelatorioUseCase } from "../relatorio/geraRelatorioUseCase";
import { ValidaParamObrigatorios } from "../../validations/common/validaParamObrigatorio";
import { reportRepositoryImpl } from "../../../data/repositories/reportRepositoryImpl";


const relatorioRP1 = new reportRepositoryImpl();

const validaParamObrigatorio = new ValidaParamObrigatorios();

const gerarRelatorioUseCase = new GeraRelatorioUseCase(validaParamObrigatorio, relatorioRP1);

export {gerarRelatorioUseCase};

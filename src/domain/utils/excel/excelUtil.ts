const excel4node = require('excel4node');
const excelWK = new excel4node.Workbook();
const excelWKS = excelWK.addWorksheet('ArquivoExcel')

import { CABECALHO_PADRAO_RP1 } from '../../../constants/excel/cabecalhoPadraoConstants';
import { COLUNA_PADRAO_RP1 } from '../../../constants/excel/padraoTypeConstants';

export class IExcelUtil
{
    async geraRelatorio(data:any)
    {
        this.montaCabecalho();

        var dataInicial:string = this.separaDataHora(data.dataInicial);
        var dataFinal:string   = this.separaDataHora(data.dataFinal);

        for (var idxLinha = 2; idxLinha < (data.alunos.length + 2); idxLinha++)
        {
            this.montaLinhaRelatorio(idxLinha, COLUNA_PADRAO_RP1.NomeAula      , data.nomeAula);
            this.montaLinhaRelatorio(idxLinha, COLUNA_PADRAO_RP1.NomeCurso     , data.nomeCurso);
            this.montaLinhaRelatorio(idxLinha, COLUNA_PADRAO_RP1.NomeTurma     , data.nomeTurma);
            this.montaLinhaRelatorio(idxLinha, COLUNA_PADRAO_RP1.NomeDisciplina, data.nomeDisciplina);
            this.montaLinhaRelatorio(idxLinha, COLUNA_PADRAO_RP1.Data          , dataInicial[0].toString());
            this.montaLinhaRelatorio(idxLinha, COLUNA_PADRAO_RP1.HoraInicial   , dataInicial[1].toString());
            this.montaLinhaRelatorio(idxLinha, COLUNA_PADRAO_RP1.HoraFinal     , dataFinal  [1].toString());
            this.montaLinhaRelatorio(idxLinha, COLUNA_PADRAO_RP1.NomeAluno     , data.alunos[idxLinha - 2].nomeAluno); 
            this.montaLinhaRelatorio(idxLinha, COLUNA_PADRAO_RP1.TipoAluno     , data.alunos[idxLinha - 2].tipoAluno);
            this.montaLinhaRelatorio(idxLinha, COLUNA_PADRAO_RP1.Presenca      , data.alunos[idxLinha - 2].presenca ? "Presente" : "Faltou");
        }

        return excelWK;
    }

    private async montaCabecalho() 
    {
        var IdxCabecalhoColuna = 1;
        CABECALHO_PADRAO_RP1.forEach(cabecalho => 
        {
            excelWKS.cell(1, IdxCabecalhoColuna++).string(cabecalho);
        });
    }

    private separaDataHora(data) : string
    {
        return data.split(" - ");
    }

    private async montaLinhaRelatorio(Linha, Coluna, Opcao)
    {
        var stylePresente = excelWK.createStyle({
            font: {
            color: 'black'
            }
        })

        if (Coluna == COLUNA_PADRAO_RP1.Presenca)
        {
            stylePresente = excelWK.createStyle({
                font: {
                color: Opcao == "Presente" ? 'green' : 'red',
                }
            })
        }

        excelWKS.cell(Linha, Coluna).string(Opcao).style(stylePresente);
    }
}
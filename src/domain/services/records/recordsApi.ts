const axios = require('axios');

export class AuthApi {

    async buscaDadosRelatorioRP1(codTurma, dataInicial, dataFinal): Promise<string> {
        return axios.post('http://localhost:3002/chamada/RP1', {
            codTurma: codTurma,
            dataInicial: dataInicial,
            dataFinal: dataFinal,
        }).catch(() => {
            console.log("Serviço indisponível: AuthApi");
        })
    }
}
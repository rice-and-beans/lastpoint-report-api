const axios = require('axios');

export class AuthApi 
{
    async validaToken(token: string): Promise<string> 
    {
        return await axios.get('http://localhost:3002/auth/', 
        {
            headers: {
                "x-access-token": token ? token : ""
            }
        } 
        ).catch(() => 
        {
            console.log("Serviço indisponível: AuthApi");
            return null;
        });
    }
}
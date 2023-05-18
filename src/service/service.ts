import axios from "axios";

export const api = axios.create({
    baseURL:"urladosite render aqui "
})
export const login = async(url:any,  dados:any, setDados:any) => {
    const resposta = await api.post(url,dados)
    setDados(resposta)
    console.log(u)
}

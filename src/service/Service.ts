import axios from "axios";


export const api = axios.create({
    baseURL: ""
})
export const login = async (url: string, dados: object, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
}
export const cadastrarUsuario = async (url: string, dados: object, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data)

}
export const buscar = async (url: any, setDado: any , header: any) => {
    const resposta = await api.get(url, header)
    setDado(resposta.data)
}
export const buscarId = async (url: any, setDado: any , header: any) => {
    const resposta = await api.get(url, header)
    setDado(resposta.data)
}
export const post = async (url: string, dados:object ,setDado: any , header: any) => {
    const resposta = await api.post(url,dados, header)
    setDado(resposta.data)
}
export const put = async (url: string, dados:object, setDado: any , header: any) => {
    const resposta = await api.put(url, dados, header)
    setDado(resposta.data)
}
export const deleteId = async (url: any, header: any) => {
   await api.delete(url, header)
    
}

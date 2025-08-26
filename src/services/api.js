// 🇧🇷 Serviço Axios centralizado para falar com a API TOTI

import axios from 'axios'

// ► Em desenvolvimento usamos '/api' (proxy do Vite).
// ► Em produção usamos a URL pública do backend.
const api = axios.create({
  baseURL: import.meta.env.DEV ? '/api' : 'https://backend-toti.onrender.com'
})

/* =========================
   CATEGORIAS
   ========================= */
export const listCategorias  = () => api.get('/categorias').then(r => r.data)
export const getCategoria    = (id) => api.get(`/categorias/${id}`).then(r => r.data)
export const createCategoria = (payload) => api.post('/categorias', payload).then(r => r.data)
export const updateCategoria = (id, payload) => api.put(`/categorias/${id}`, payload).then(r => r.data)
export const deleteCategoria = (id) => api.delete(`/categorias/${id}`).then(r => r.data)


/* =========================
   PRODUTOS
   (nome, preco, categoriaId, imagens: [{url}])
   ========================= */
export const listProdutos  = (params={}) => api.get('/produtos', { params }).then(r => r.data)
export const getProduto    = (id) => api.get(`/produtos/${id}`).then(r => r.data)
export const createProduto = (payload) => api.post('/produtos', payload).then(r => r.data)
export const updateProduto = (id, payload) => api.put(`/produtos/${id}`, payload).then(r => r.data)
export const deleteProduto = (id) => api.delete(`/produtos/${id}`).then(r => r.data)

/* =========================
   CLIENTES
   ========================= */
export const listClientes  = () => api.get('/clientes').then(r => r.data)
export const getCliente    = (id) => api.get(`/clientes/${id}`).then(r => r.data)
export const createCliente = (payload) => api.post('/clientes', payload).then(r => r.data)
export const updateCliente = (id, payload) => api.put(`/clientes/${id}`, payload).then(r => r.data)
export const deleteCliente = (id) => api.delete(`/clientes/${id}`).then(r => r.data)

/* =========================
   CARRINHOS
   ========================= */
export const listCarrinhos  = (params={}) => api.get('/carrinhos', { params }).then(r => r.data)
export const getCarrinho    = (id) => api.get(`/carrinhos/${id}`).then(r => r.data)
export const createCarrinho = (payload) => api.post('/carrinhos', payload).then(r => r.data)
export const updateCarrinho = (id, payload) => api.put(`/carrinhos/${id}`, payload).then(r => r.data)
export const deleteCarrinho = (id) => api.delete(`/carrinhos/${id}`).then(r => r.data)

/* =========================
   METADATA
   ========================= */
export const getMetadata = () => api.get('/metadata').then(r => r.data)

export default api
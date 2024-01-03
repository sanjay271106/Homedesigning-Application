import axios from 'axios'

const URL = 'http://localhost:3000/users'

const getuser =()=> axios.get(`${URL}`)
const getUserId = (id) => axios.get(`${URL}/${id}`)
const addUser = (data) => axios.post(`${URL}`,data)
const editUser = (id,data) => axios.put(`${URL}/${id}`,data)
const deleteUser = (id) => axios.delete(`${URL}/${id}`)

export{getuser,getUserId,addUser,editUser,deleteUser};
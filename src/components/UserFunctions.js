import axios from 'axios'

export const register = newUser => {
  return axios
    .post('/sistema/register', {
      nome: newUser.nome,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = user => {
  return axios
    .post('/sistema/login', {
      email: user.email,
      password: user.password
    })

    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log("error: "+ err)
    })
}

export const getProfile = user => {
  return axios
    .get('/sistema/profile', {
      //headers: { Authorization: ` ${this.getToken()}` }
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log("erro" + err)
    })
}

import axios from 'axios'

export default (req) => {
  return axios.post(`https://${req.params.network}.infura.io/${process.env.INFURA_ID}`, {
    ...req.body
  })
  .then(({ data }) => {
    return Promise.resolve(data)
  })
  .catch(err => {
    return Promise.resolve(err.response.data)
  })
}

import axios from 'axios'

export default (req) => {
  return axios.post(`https://${req.params.slug}.infura.io/${process.env.INFURA_ID}`)
  .then(({ data }) => {
    return Promise.resolve(data)
  })
  .catch(err => {
    return Promise.resolve(err.response.data)
  })
}

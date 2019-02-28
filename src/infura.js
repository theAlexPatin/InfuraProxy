import axios from 'axios'

export default (req, res, next) => {
  axios.post(`https://${req.params.network}.infura.io/${process.env.INFURA_ID}`, {
    ...req.body
  }).then(({ data }) => {
    res.json({
      ...data
    })
  }).catch(err => {
    res.status(400)
    res.send({
      ...err.response.data
    })
  })
}

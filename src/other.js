import axios from 'axios'

export const symbol = (req, res, next) => {
  axios.get(`https://api.infura.io/v1/ticker/${req.params.symbol}`)
    .then(({ data }) => {
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

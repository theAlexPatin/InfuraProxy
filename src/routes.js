import { Router } from 'express'
import { Joi, celebrate } from 'celebrate'
import infura from './infura'
import web3Methods from './web3Methods.json'

const networks = [
  'mainnet',
  'ropsten',
  'rinkeby',
  'kovan'
]

const router = new Router()

const web3RequestStructure = {
  body: Joi.object({
    jsonrpc: Joi.string().empty('').default('2.0'),
    id: Joi.number().default(1),
    method: Joi.string().valid(...web3Methods).required(),
    params: Joi.array().items(Joi.string()).default([])
  }),
  params: Joi.object({
    network: Joi.string().valid(...networks).required()
  })
}

router.route('/:network').post(
  celebrate(web3RequestStructure),
  (req, res, next) => {
    infura(req).then(response => {
      res.status(200)
      res.send({
        ...response
      })
    }).catch(err => {
      res.status(400)
      res.json({
        ...err
      })
    })
  }
)

export default router

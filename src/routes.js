import { Router } from 'express'
import { Joi, celebrate } from 'celebrate'
import Infura from './infura'
import * as Other from './Other'
import web3Methods from './web3Methods.json'
import axios from 'axios'

const router = new Router()


/**
 * STANDARD WEB3 REQUESTS
 */
const networks = [
  'mainnet',
  'ropsten',
  'rinkeby',
  'kovan'
]

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
  Infura
)


/**
 * OTHER INUFRA ROUTES
 */

/**
 * Symbol
 */
router.route('/ticker/:symbol').get(
  celebrate({
    params: Joi.object({
      symbol: Joi.string().required()
    })
  }),
  Other.symbol
)



export default router

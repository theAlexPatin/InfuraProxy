import _ from '@/env'
import axios from 'axios'

const testAccount = process.env.TEST_ACCOUNT || '0x81b7e08f65bdf5648606c89998a9cc8164397647'

axios.post(`http://localhost:${process.env.PORT || 5000}/mainnet`, {
  jsonrpc: '2.0',
  id: 1,
  method: 'eth_getBalance',
  params: [testAccount, 'latest']
}).then(({ data }) => {
  console.log('Address: ' + testAccount)
  console.log('Balance: '+parseInt(data.result, 16) / Math.pow(10, 18))
}).catch(err => {
  console.log(err.response.data)
})

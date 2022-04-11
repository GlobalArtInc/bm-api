import {Client} from '../src'

const client = new Client({
    token: 'BOT_TOKEN_IS_HERE'
})

client.bots.checkVote("189094417712414720").then((response) => {
    console.log(response)
}).catch((err) => {
    console.log(err)
})

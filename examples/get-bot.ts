import { Client } from '../src'

const client = new Client({
    token: 'BOT_TOKEN_IS_HERE'
})

client.bots.info("800354757297438750").then((response) => {
    console.log(response)
}).catch((err) => {
    console.log(err)
})

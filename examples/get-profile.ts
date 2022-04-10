import {Client} from '../src'

const client = new Client({
    token: 'BOT_TOKEN_IS_HERE'
})

client.users.profile("189094417712414720").then((res) => {
    console.log(res)
})

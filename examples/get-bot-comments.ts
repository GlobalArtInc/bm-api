import {Client} from '../src'

const client = new Client({
    token: 'BOT_TOKEN_IS_HERE'
})

client.bots.comments("800354757297438750").then((res) => {
    console.log(res)
}).catch(console.error)

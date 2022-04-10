import { Client } from '../src'

const client = new Client({
    token: 'BOT_TOKEN_IS_HERE'
})

client.bots.postStats({
    serverCount: 1,
    shardCount: 1
}).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})

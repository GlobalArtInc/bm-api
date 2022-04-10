import {Client} from '../src'

const client = new Client({})

client.users.profile("189094417712414720").then((res) => {
    console.log(res)
})

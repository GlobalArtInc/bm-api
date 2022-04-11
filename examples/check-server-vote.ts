import {Client} from '../src'

const client = new Client({})

client.users.checkVote("674261756029173800", "189094417712414720").then((response) => {
    console.log(response)
}).catch((err) => {
    console.log(err)
})

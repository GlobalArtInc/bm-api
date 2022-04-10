import {Client} from '../src'

const client = new Client({})

client.servers.info("674261756029173800").then((response) => {
    console.log(response)
})

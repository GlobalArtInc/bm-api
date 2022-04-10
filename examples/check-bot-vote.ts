import { Client } from '../src'

const client = new Client({
    token: 'RypWZQHdfhVttOAWs77EjJ69Er4W3lMW1G3xZey6EBA2q2cTFdNGiVVv7aDJwa4Zfj7A767DVGVuebFPaWu1faPY5A6hIWPPkdlCYw5JIPPeJVK4fzdkMHzm5dfBe2Q5'
})

client.bots.checkVote("189094417712414720").then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})

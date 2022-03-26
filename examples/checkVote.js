const apiKey = "RypWZQHdfhVttOAWs77EjJ69Er4W3lMW1G3xZey6EBA2q2cTFdNGiVVv7aDJwa4Zfj7A767DVGVuebFPaWu1faPY5A6hIWPPkdlCYw5JIPPeJVK4fzdkMHzm5dfBe2Q5"

const BM = require('../bm.js')
const client = new BM(apiKey)

client.checkVote("189094417712414720").then(r => {
    console.log(r)
});

# bm-api

## Установка
```sh
$ npm install @globalart/bm-api
```
## Инициализация враппера
```js
// ES6
import { Client } from '@globalart/bm-api'

const client = new Client({
    token: 'BOT_TOKEN_IS_HERE'
})

// CommonJS
const { Client } = require('@globalart/bm-api')

const client = new Client({
    token: 'BOT_TOKEN_IS_HERE'
})
```

## Примеры кода
```js
// Получить информацию о боте
client.bots.info(botId).then((response) => {
    console.log(response)
})

// Получить информацию о пользователе
client.users.profile(userId).then((response) => {
    console.log(response)
})

// Узнать, если пользователь проголосовал за бота
client.bots.checkVote(userId).then((response) => {
    console.log(response)
})

// IN DEVELOPMENT
// Опубликовать статистику бота
// client.bots.stats({
//     serverCount: 0,
//     shardCount: 0
// })

```

# bm-api

## Установка
```sh
$ npm install github:GlobalArtInc/bm-api
```
## Инициализация враппера
```js
let apiKey = "Your token here";
// API ключ можно получить на странице редактирования вашего бота

const BM = require("@globalart/bm-api");
const client = new BM(apiKey);
```

## Примеры кода
```js
// Получить информацию о боте
client.getBot(botId).then((data) => {
    console.log(data)
})

// Узнать, если пользователь проголосовал за бота
client.checkVote(userId).then((data) => {
    console.log(data)
})

// Опубликовать статистику бота
client.refreshBotData({
    serverCount: 0,
    shardCount: 0
})

```

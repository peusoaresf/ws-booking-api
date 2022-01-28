const mocks = require('./_mocks_.json')
const dynamodb = require('../src/database/dynamodb')

// STAGE=local node scripts/load-db.js

const loaddb = async () => {
  if (process.env.STAGE === 'local') {
    const tables = Object.keys(mocks)

    for (const TableName of tables) {
      console.log('loading table', TableName)

      const items = mocks[TableName]

      await items.map((Item) => {
        console.log('persisting item', Item)

        return dynamodb.put({
          TableName,
          Item,
        })
      })
    }
  }
}

loaddb()
  .then(() => console.log('load finished'))

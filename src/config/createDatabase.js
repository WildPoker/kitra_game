const { createDatabase } = require('./database')

createDatabase()
  .then(() => {
    process.exit(0)
  })
  .catch(err => {
    console.error('Error creating the database:', err)
    process.exit(1)
  })

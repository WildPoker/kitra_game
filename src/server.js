require('module-alias/register')
const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')
const { createDatabase } = require('./config/database')
const routesPath = path.join(__dirname, 'routes')

module.exports = {
  /**
   * Create the restify server
   * @return {Express} A server restify without any routes
   **/
  create_server: () => {
    return express()
  },

  /**
   * Allow us to use the middleware helmet for hiding some headers
   * @param {Express} server The server allowed to use helmet
   **/
  register_helmet: server => {
    server.use(require('helmet')())
  },

  /**
   * Allow us to use the middleware cors
   * @param {Express} server The server allowed to use cors
   **/
  register_cors: server => {
    server.use(cors())
  },

  /**
   * Allow us to use the middleware of body-parser
   * @param {Express} server The server allowed to use body-parser
   */
  register_body_parser: server => {
    const bodyParser = require('body-parser')
    server.use(bodyParser.urlencoded({ extended: true }))
    server.use(bodyParser.json())
  },

  /**
   * Get all the routes
   * @param {Express} server - The express server
   * @return {all_routes} Return all the routes
   */
  routes: server => {
    const routes = fs.readdirSync(routesPath)
    const all_routes = routes.map(route => {
      route = path.basename(route, '.js')
      return server.use(`/app`, require(`./routes/${route}`))
    })
    return all_routes
  },

  /**
   * Start the server using the parameter
   * @param {string} name The name of the server
   * @param {string} host The host of the server
   * @param {string} port The port of the server
   * @return {Promise<boolean>} True if the server starts or else an error
   **/
  start: async (name, host, port) => {
    const server = module.exports.create_server()

    module.exports.register_cors(server)
    module.exports.register_body_parser(server)
    module.exports.register_helmet(server)

    try {
      await createDatabase()

      module.exports.routes(server)
    } catch (error) {
      console.log('Error during server startup:', error)
      process.exit(1)
    }

    return new Promise((resolve, reject) => {
      server.listen(port, error => module.exports.callback(error, resolve, reject, port))
    })
  },

  callback: (error, resolve, reject, port) => {
    if (error) {
      console.log('Server failed to start!')
      reject(new Error('Server failed to start!'))
    } else {
      console.log('Server Started at Port ' + port)
      resolve(true)
    }
  }
}

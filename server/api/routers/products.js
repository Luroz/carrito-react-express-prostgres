const express = require('express')
const pool = require('../db/queries')
const routerProducts = express.Router()

const getProducts = (request, response) => {
  pool.query('SELECT * FROM products ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getProductById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM products WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


routerProducts.get('/products', getProducts)
routerProducts.get('/product/:id', getProductById)

module.exports = routerProducts
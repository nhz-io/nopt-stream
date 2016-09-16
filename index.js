'use strict'

const nopt = require('nopt')
const streamFrom = require('from')

module.exports = (...args) => streamFrom(function() {
    this.emit('data', nopt(...args))
    this.emit('end')
    return true
})

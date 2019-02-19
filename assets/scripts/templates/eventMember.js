'use strict'

const store = require('./../store.js')

const eventMember = (members) => {
  const value = []
  $.each(members, function () {
    if (this.user_id === store.user.id) {
      value.push(this.user_id)
    } else {
    }
  })
  if (value.length >= 1) {
    return false
  } else {
    return true
  }
}

module.exports = eventMember

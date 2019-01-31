'use strict'

const config = require('../config')
const store = require('../store')

const createGroup = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/groups',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const getGroups = function () {
  return $.ajax({
    url: config.apiUrl + '/groups'
  })
}

const joinGroup = function () {
  return $.ajax({
    url: config.apiUrl + '/group_members',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data: {
      'group_member': {
        'group_id': store.group.id,
        'user_id': store.user.id
      }
    }
  })
}

module.exports = {
  createGroup,
  getGroups,
  joinGroup
}

// headers: {
  //   contentType: 'application/json',
  //   Authorization: 'Token token=' + store.user.token
  // },

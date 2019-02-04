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
// get all groups
const getGroups = function () {
  return $.ajax({
    url: config.apiUrl + '/groups'
  })
}
// get user organized groups
const userGroups = function () {
  return $.ajax({
    url: config.apiUrl + '/organized-groups',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
// join a group
const joinGroup = function (data) {
  return $.ajax({
    url: config.apiUrl + '/group_members',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const updateGroup = function (formData, groupId) {
  return $.ajax({
    url: config.apiUrl + '/groups/' + groupId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const deleteGroup = function (groupId) {
  return $.ajax({
    url: config.apiUrl + '/groups/' + groupId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// Get groups user is a member of
const getGroupMember = function () {
  return $.ajax({
    url: config.apiUrl + '/group_members',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createGroup,
  getGroups,
  joinGroup,
  deleteGroup,
  userGroups,
  updateGroup,
  getGroupMember
}

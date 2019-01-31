'use strict'

const ui = require('./ui.js')
const api = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onJoinGroup = (event) => {
  event.preventDefault()

  api.joinGroup()
    .then(ui.onJoinSuccess)
    .catch(ui.onFailure)
}

const onCreateGroup = (event) => {
  event.preventDefault()

  const formData = getFormFields(event.target)

  api.createGroup(formData)
    .then(ui.onCreateSuccess)
    .then(() => onJoinGroup(event))
    .catch(ui.onFailure)

  $('#create-group').trigger('reset')
}

const onGetGroups = (event) => {
  event.preventDefault()
  api.getGroups()
    .then(ui.getGroupsSuccess)
    .catch(ui.onFailure)
}

const addHandlers = () => {
  $('#create-group').on('submit', onCreateGroup)
  $('#get-groups').on('click', onGetGroups)
  // $('#clearBooksButton').on('click', onClearBooks)
  // $('.content').on('click', 'button', onDeleteBook)
}
module.exports = {
  addHandlers
}

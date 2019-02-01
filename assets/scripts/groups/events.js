'use strict'

const ui = require('./ui.js')
const api = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store')

const onJoinGroup = (event) => {
  event.preventDefault()

  const data = {
    'group_member': {
      'group_id': $(event.target).data('id'),
      'user_id': store.user.id
    }
  }

  api.joinGroup(data)
    .then(ui.onJoinSuccess)
    .catch(ui.onFailure)
}

const onCreateGroup = (event) => {
  event.preventDefault()

  const formData = getFormFields(event.target)
  formData.group['user_id'] = store.user.id

  api.createGroup(formData)
    .then(ui.onCreateSuccess)
    .catch(ui.onFailure)

  $('#create-group').trigger('reset')
}

const onGetGroups = (event) => {
  event.preventDefault()
  $('.my-4').empty()

  api.getGroups()
    .then(ui.getGroupsSuccess)
    .catch(ui.onFailure)
}

const onGetUserGroups = (event) => {
  event.preventDefault()
  $('.my-4').empty()

  api.userGroups()
    .then(ui.onUserGroupSuccess)
    .catch(ui.onFailure)
}

const onUpdateGroup = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  const groupId = $(event.target).closest('form').data('id')
  formData.group['user_id'] = store.user.id

  api.updateGroup(formData, groupId)
    .then(ui.onCreateSuccess)
    .catch(ui.onFailure)
}

const onDeleteGroup = (event) => {
  event.preventDefault()
  const groupId = $(event.target).data('id')

  api.deleteGroup(groupId)
    .then(() => onGetUserGroups(event))
    .catch(ui.onFailure)
}

const addHandlers = () => {
  $('#create-group').on('submit', onCreateGroup)
  $('#get-groups').on('click', onGetGroups)
  $('#user-groups').on('click', onGetUserGroups)
  $('#dashFeed').on('click', '.join', onJoinGroup)
  $('#dashFeed').on('click', '.delete', onDeleteGroup)
  $('#dashFeed').on('submit', '.update', onUpdateGroup)
}
module.exports = {
  addHandlers
}

// 'use strict'
//
// const ui = require('./ui.js')
// const api = require('./api.js')
// const getFormFields = require('../../../lib/get-form-fields.js')
// const store = require('../store')
//
// const onJoinGroup = (event) => {
//   event.preventDefault()
//
//   api.joinGroup()
//     .then(ui.onJoinSuccess)
//     .catch(ui.onFailure)
// }
//
// const onCreateEvent = (event) => {
//   event.preventDefault()
//
//   const formData = getFormFields(event.target)
//   formData.group['user_id'] = store.user.id
//
//   api.createEvent(formData)
//     .then(ui.onCreateEventSuccess)
//     .catch(ui.onFailure)
//
//   $('#create-group').trigger('reset')
// }
//
// const onGetGroups = (event) => {
//   event.preventDefault()
//   $('.my-4').empty()
//
//   api.getGroups()
//     .then(ui.getGroupsSuccess)
//     .catch(ui.onFailure)
// }
//
// const onGetUserGroups = (event) => {
//   event.preventDefault()
//   $('.my-4').empty()
//
//   api.userGroups()
//     .then(ui.onUserGroupSuccess)
//     .catch(ui.onFailure)
// }
//
// const onUpdateGroup = (event) => {
//   event.preventDefault()
//   const formData = getFormFields(event.target)
//   const groupId = $(event.target).closest('form').data('id')
//   formData.group['user_id'] = store.user.id
//
//   api.updateGroup(formData, groupId)
//     .then(ui.onCreateSuccess)
//     .catch(ui.onFailure)
// }
//
// const onDeleteGroup = (event) => {
//   event.preventDefault()
//   const groupId = $(event.target).data('id')
//
//   api.deleteGroup(groupId)
//     .then(() => onGetUserGroups(event))
//     .catch(ui.onFailure)
// }
//
// const addHandlers = () => {
//   $('#create-event').on('submit', onCreateEvent)
//   $('#get-groups').on('click', onGetGroups)
//   $('#user-groups').on('click', onGetUserGroups)
//   $('#dashFeed').on('submit', 'a', onJoinGroup)
//   $('#dashFeed').on('click', '.delete', onDeleteGroup)
//   $('#dashFeed').on('submit', '.update', onUpdateGroup)
// }
// module.exports = {
//   addHandlers
// }

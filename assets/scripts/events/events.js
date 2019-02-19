'use strict'

const ui = require('./ui.js')
const api = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store')

const onCreateEvent = (event) => {
  event.preventDefault()

  const formData = getFormFields(event.target)
  formData.event['group_id'] = $(event.target).data('id')
  formData.event['user_id'] = store.user.id

  api.createEvent(formData)
    .then(ui.onCreateEventSuccess)
    .catch(ui.onFailure)

  $('#create-group').trigger('reset')
}

const onGetEvents = (event) => {
  event.preventDefault()
  const groupId = $(event.target).data('id')

  api.getEvents(groupId)
    .then(ui.getEventsSuccess)
    .catch(ui.onFailure)
}

const onDeleteEvent = function (event) {
  event.preventDefault()
  const eventId = $(event.target).data('id')

  api.deleteEvent(eventId)
    .then(ui.deleteEventSuccess)
    .catch(ui.onFailure)
}

const onShowEventInfo = function (event) {
  event.preventDefault()
  const eventId = $(event.target).data('id')
  api.showEventInfo(eventId)
    .then(ui.onShowInfoSuccess)
    .catch(ui.onShowInfoFailure)
}

const onAttendEvent = function (event) {
  event.preventDefault()

  const data = {
    'attending_member': {
      'event_id': $(event.target).data('id'),
      'user_id': store.user.id
    }
  }

  api.attendEvent(data)
    .then(ui.onAttendSuccess)
    .then((eventId) => api.showEventInfo(eventId))
    .then(ui.onShowInfoSuccess)
    .catch(ui.onFailure)
}

const onUserAttendingEvents = function (event) {
  event.preventDefault()

  api.userAttendingEvents()
    .then(ui.onUserAttendingSuccess)
    .catch(ui.onFailure)
}

const addHandlers = () => {
  $('#get-events').on('click', onUserAttendingEvents)
  $('#dashFeed').on('submit', '.event', onCreateEvent)
  $('#dashFeed').on('click', '.events', onGetEvents)
  $('#dashFeed').on('click', '.delete-event', onDeleteEvent)
  $('#dashFeed').on('click', '.attend', onAttendEvent)
  $('#dashFeed').on('click', '.event-info', onShowEventInfo)
}
module.exports = {
  addHandlers
}

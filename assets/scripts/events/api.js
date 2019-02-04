'use strict'

const config = require('../config')
const store = require('../store')

const createEvent = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/events',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const getEvents = function (groupId) {
  return $.ajax({
    url: config.apiUrl + '/show_events/' + groupId,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteEvent = function (eventId) {
  return $.ajax({
    url: config.apiUrl + '/events/' + eventId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// Join an event
const attendEvent = function (data) {
  return $.ajax({
    url: config.apiUrl + '/attending_members',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const showEventInfo = function (eventId) {
  return $.ajax({
    url: config.apiUrl + '/attending_members/' + eventId,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const userAttendingEvents = function () {
  return $.ajax({
    url: config.apiUrl + '/attending_members/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createEvent,
  getEvents,
  deleteEvent,
  attendEvent,
  showEventInfo,
  userAttendingEvents
}

'use strict'
const store = require('./../store')
const createEventTemplate = require('./../templates/create-event.handlebars')
const getEventsTemplate = require('./../templates/get-events.handlebars')
const eventInfoTemplate = require('./../templates/event-info.handlebars')

const onCreateEventSuccess = (data) => {
  $('.my-4').empty()
  $('.modal').modal('hide')
  $('.my-4').append('<div class="alert alert-success" role="alert">Successfully created your event!</div>')

  const showGroupHtml = createEventTemplate({ event: data.event })

  $('.my-4').append(showGroupHtml)

  $('form').trigger('reset')
}

const getEventsSuccess = (response) => {
  $('.my-4').empty()
  if (response.events.length !== 0) {
    $.each(response, function () {
      $.each(this, function () {
        if (store.organizer.some(x => x === this.group_id)) {
          const showOrganizerEventsHtml = createEventTemplate({ event: this })
          $('.my-4').append(showOrganizerEventsHtml)
        } else {
          const showEventsHtml = getEventsTemplate({ event: this })
          $('.my-4').append(showEventsHtml)
        }
      })
    })
  } else {
    $('.my-4').append('<div class="alert alert-danger" role="alert">Looks like there\'s nothing to do here!</div>')
  }
}

const deleteEventSuccess = () => {
  $('.my-4').empty()
  $('.my-4').append('<div class="alert alert-danger" role="alert">Event successfully deleted</div>')
}

const onAttendSuccess = (response) => {
  $('.my-4').empty()
  $('.my-4').append('<div class="alert alert-success" role="alert">Your\'re all set to attend this event!</div>')

  return response.attending_member.event['id']
}

const onShowInfoSuccess = function (response) {
  $('.my-4').empty()
  $('.my-4').append('<div class="alert alert-success" role="alert">Checkout who\'s going below!</div>')

  const eventInfoHtml = eventInfoTemplate({ attending_members: response.attending_members })
  $('.my-4').append(eventInfoHtml)
}

const onShowInfoFailure = function () {
  $('.my-4').empty()
  $('.my-4').append('<div class="alert alert-danger" role="alert">Looks like nobody is going yet. Click "Attend Event" to get the ball rolling!</div>')
}

const onUpdateSuccess = function (data) {
  $('.my-4').empty()
  $('.my-4').append('<div class="alert alert-success" role="alert">Successfully updated group!</div>')
  $('.modal').modal('hide')

  const showGroupHtml = createEventTemplate({ event: data.event })

  $('.my-4').append(showGroupHtml)

  $('form').trigger('reset')
}

const onFailure = () => $('.my-4').append('<div class="alert alert-danger" role="alert">Something went wrong</div>')

module.exports = {
  onCreateEventSuccess,
  getEventsSuccess,
  onFailure,
  deleteEventSuccess,
  onAttendSuccess,
  onShowInfoSuccess,
  onUpdateSuccess,
  onShowInfoFailure
}

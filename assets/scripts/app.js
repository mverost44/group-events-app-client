'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./auth/events.js')
const groupEvents = require('./groups/events.js')
const eventsEvents = require('./events/events.js')

$(() => {
  // background image for home-screen
  $('body').css('background-image', 'url("public/home-background.jpg")')
  // Hidden on page load
  $('#dropdown').hide()
  $('.user-sign-in').hide()
  $('.container-fluid').hide()
  // Toggle Sign-up/in
  $('#toggle-sign-in-btn').on('click', function () {
    $('.user-sign-up').hide()
    $('.user-sign-in').show()
  })
  $('#toggle-sign-up-btn').on('click', function () {
    $('.user-sign-in').hide()
    $('.user-sign-up').show()
  })
  // User Authentication
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#user-change-password').on('submit', events.onChangePassword)
  $('#sign-out-btn').on('click', events.onSignOut)
  $('#user-change-pw').on('submit', events.onChangePassword)
  // Group CRUD
  groupEvents.addHandlers()
  // Events CRUD
  eventsEvents.addHandlers()
})

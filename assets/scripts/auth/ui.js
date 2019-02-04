'use strict'

const store = require('../store')

const onSignUpSuccess = (response) => {
  $('.home-screen').append('<div class="alert alert-success" role="alert">Successfully Signed Up!</div>')
}

const onSignUpFailure = (response) => {
  $('.home-screen').append('<div class="alert alert-warning" role="alert">something went wrong, try again.</div>')
}

const onSignInSuccess = (response) => {
  store.user = response.user
  $('body').css('background-image', '')
  $('.home-screen').hide()
  $('.container-fluid').show()
  $('.p-2').show()
  $('.dropdown').show()
  $('.my-4').append('<div class="alert alert-success" role="alert">Signed In!</div>')
}

const onSignInFailure = (response) => {
  $('.home-screen').append('<div class="alert alert-warning" role="alert">Something went wrong, try again.</div>')
}

const onChangeSuccess = (response) => {
  $('.home-screen').append('<div class="alert alert-success" role="alert">Successfully changed password!</div>')
}

const onChangeFailure = () => {
  $('.home-screen').append('<div class="alert alert-warning" role="alert">Something went wrong.</div>')
}

const onSignOutSuccess = () => {
  $('#dashFeed').empty()
  $('.container-fluid').hide()
  $('body').css('background-image', 'url("/public/home-background.jpg")')
  $('.home-screen').show()
  $('.p-2').hide()
  $('.dropdown').hide()
  $('.home-screen').append('<div class="alert alert-warning" role="alert">Signed Out.</div>')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangeSuccess,
  onChangeFailure,
  onSignOutSuccess
}

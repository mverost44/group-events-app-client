'use strict'

const store = require('../store')

const onSignUpSuccess = (response) => {
  $('.alert').alert('close')
  $('.home-screen').append('<div class="alert alert-success" role="alert">Successfully Signed Up!</div>')
  $('#sign-up-span').toggleClass('spinner-grow spinner-grow-sm')
}

const onSignUpFailure = (response) => {
  $('.alert').alert('close')
  $('.home-screen').append('<div class="alert alert-warning" role="alert">Failed to Sign Up, try again.</div>')
  $('#sign-up-span').toggleClass('spinner-grow spinner-grow-sm')
}

const onSignInSuccess = (response) => {
  $('.alert').alert('close')

  store.user = response.user
  $('body').css('background-image', '')
  $('.home-screen').hide()
  $('.container-fluid').show()
  $('.p-2').show()
  $('.dropdown').show()
  $('.my-4').append('<div class="alert alert-success" role="alert">Signed In!</div>')
  return event
}

const onSignInFailure = (response) => {
  $('.alert').alert('close')

  $('.home-screen').append('<div class="alert alert-warning" role="alert">Failed to sign in, please try again.</div>')
}

const onChangeSuccess = (response) => {
  $('.alert').alert('close')

  $('.my-4').append('<div class="alert alert-success" role="alert">Successfully changed password!</div>')
}

const onChangeFailure = () => {
  $('.alert').alert('close')

  $('.my-4').append('<div class="alert alert-warning" role="alert">Failed to change password, please try again.</div>')
}

const onSignOutSuccess = () => {
  $('.alert').alert('close')
  store.user = [-1]
  store.groupmember = [-1]
  $('#dashFeed').empty()
  $('.container-fluid').hide()
  $('body').css('background-image', 'url("public/home-background.jpg")')
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

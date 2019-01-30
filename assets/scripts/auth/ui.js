'use strict'

const store = require('../store')

const onSignUpSuccess = (response) => {
  console.log(response)
}

const onSignUpFailure = (response) => {
  console.log(response)
}

const onSignInSuccess = (response) => {
  store.user = response.user
  console.log(store.user)
  $('body').css('background-image', '')
  $('.home-screen').hide()
  $('.container-fluid').show()
  $('.nav-item').show()
}

const onSignInFailure = (response) => {
  $('#user-message').text('Incorrect Username/Password. Please try again.').css('color', 'red')
}

const onChangeSuccess = () => {
  $('#user-message').text('Password successfully changed!').css('color', 'white')
}

const onChangeFailure = () => {
  $('#user-message').text('Error. Try AGAIN').css('color', 'red')
}

const onSignOutSuccess = () => {
  $('.container-fluid').hide()
  $('body').css('background-image', 'url("/public/home-background.jpg")')
  $('.home-screen').show()
  $('.nav-item').hide()
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

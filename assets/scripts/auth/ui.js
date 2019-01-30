'use strict'

const store = require('../store')

const onSignUpSuccess = (response) => {
  console.log(response)
}

const onSignUpFailure = (response) => {
  console.log(response)
}

const onSignInSuccess = (response) => {
  $('#user-message').text('Successfully signed in.').css('color', 'white')
  store.user = response.user
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

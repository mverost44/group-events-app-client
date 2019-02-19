'use strict'

const ui = require('./ui.js')
const api = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const groupApi = require('./../groups/api.js')
const groupUi = require('./../groups/ui.js')

const onSignUp = (event) => {
  event.preventDefault()
  $('#sign-up-span').toggleClass('spinner-grow spinner-grow-sm')
  const formData = getFormFields(event.target)

  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)

  $('#sign-up-form').trigger('reset')
}

const onSignIn = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.signIn(formData)
    .then(ui.onSignInSuccess)
    // get groups user is a member of to keep in store.groupmember
    .then(() => groupApi.getGroupMember(event))
    .then(groupUi.onGroupMemberSuccess)
    .catch(ui.onSignInFailure)

  $('#sign-in-form').trigger('reset')
}

const onChangePassword = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.changePassword(formData)
    .then(ui.onChangeSuccess)
    .catch(ui.onChangeFailure)

  $('#user-change-pw').trigger('reset')
  $('#changePasswordModal').modal('hide')
}

const onSignOut = event => {
  event.preventDefault()

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}

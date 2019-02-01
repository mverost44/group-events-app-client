'use strict'

// const store = require('../store')
const showGroupsTemplate = require('./../templates/group-listing.handlebars')
const createGroupTemplate = require('./../templates/create-group-list.handlebars')
const showUserGroupsTemplate = require('./../templates/user-groups.handlebars')

const onCreateSuccess = (data) => {
  $('.my-4').empty()
  $('.modal').modal('hide')
  const showGroupHtml = createGroupTemplate({ group: data.group })

  $('.my-4').append(showGroupHtml)

  $('form').trigger('reset')
}

const getGroupsSuccess = (data) => {
  console.log(data)
  const showGroupsHtml = showGroupsTemplate({ groups: data.groups })
  $('.my-4').append(showGroupsHtml)
}

const onUserGroupSuccess = (data) => {
  const showGroupsHtml = showUserGroupsTemplate({ groups: data.groups })
  $('.my-4').append(showGroupsHtml)
}

const onJoinSuccess = function (response) {
  console.log(response)
  console.log('Hell YE')
}

const onFailure = response => console.log(response, 'Didn\'t work')

module.exports = {
  onCreateSuccess,
  onFailure,
  getGroupsSuccess,
  onJoinSuccess,
  onUserGroupSuccess
}

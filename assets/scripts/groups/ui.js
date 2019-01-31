'use strict'

const store = require('../store')
const showGroupsTemplate = require('./../templates/group-listing.handlebars')

const onCreateSuccess = response => {
  store.group = response.group
  console.log(store.group.id)
}
const getGroupsSuccess = (data) => {
  console.log(data)
  const showGroupsHtml = showGroupsTemplate({ groups: data.groups })
  $('.my-4').append(showGroupsHtml)
}

const onJoinSuccess = function (response) {
  console.log(response)
}

const onFailure = response => console.log(response, 'Didn\'t work')
module.exports = {
  onCreateSuccess,
  onFailure,
  getGroupsSuccess,
  onJoinSuccess
}

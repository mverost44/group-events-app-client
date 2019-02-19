'use strict'

const store = require('../store')
const showGroupsTemplate = require('./../templates/group-listing.handlebars')
const createGroupTemplate = require('./../templates/create-group-list.handlebars')
const showUserGroupsTemplate = require('./../templates/user-groups.handlebars')
const groupMemberTemplate = require('./../templates/group-member.handlebars')
const userMemberOfTemplate = require('./../templates/user-member-of-groups.handlebars')
store.organizer = [-1]
store.groupmember = [-1]

const onCreateSuccess = (data) => {
  $('.my-4').empty()
  $('.modal').modal('hide')
  $('.my-4').append('<div class="alert alert-success" role="alert">Successfully created a group</div>')

  const showGroupHtml = createGroupTemplate({ group: data.group })

  $('.my-4').append(showGroupHtml)

  $('form').trigger('reset')
}

const getGroupsSuccess = (data) => {
  $('.my-4').empty()
  if (data.length !== 0) {
    $('.my-4').append('<div class="alert alert-success" role="alert">Check out all these groups!</div>')

    $.each(data, function () {
      $.each(this, function () {
      // filters out groups that user is a member of
        if (store.groupmember.includes(this.id)) {
        } else {
          const showGroupsHtml = showGroupsTemplate({ group: this })
          $('.my-4').append(showGroupsHtml)
        }
      })
    })
  } else {
    $('.my-4').append('<div class="alert alert-warning" role="alert">Looks like there aren\'nt any groups yet. Click \'Create Group\' to kick things off!</div>')
  }
}

const onUserGroupSuccess = (data) => {
  store.organizer = []
  $('.my-4').empty()
  $('.my-4').append('<div class="alert alert-success" role="alert">Those are some cool groups you made!</div>')

  const showGroupsHtml = showUserGroupsTemplate({ groups: data.groups })
  $('.my-4').append(showGroupsHtml)

  $.each(data, function () {
    $.each(this, function () {
      store.organizer.push(this.id)
    })
  })
}

const onJoinSuccess = function (data) {
  $('.my-4').empty()
  $('.my-4').append('<div class="alert alert-success" role="alert">You successfully joined this group!</div>')

  const showGroupsHtml = groupMemberTemplate({ group_member: data.group_member })
  $('.my-4').append(showGroupsHtml)
  store.groupmember.push(data.group_member.group_id)
}

const onGroupMemberSuccess = function (data) {
  store.groupmember = []
  $('.my-4').empty()
  $('.my-4').append('<div class="alert alert-success" role="alert">Groups you\'re in:</div>')

  const showGroupsHtml = userMemberOfTemplate({ group_members: data.group_members })
  $('.my-4').append(showGroupsHtml)

  $.each(data, function () {
    $.each(this, function () {
      store.groupmember.push(this.group_id)
    })
  })
}

const onDeleteSuccess = () => {
  $('.my-4').empty()
  $('.my-4').append('<div class="alert alert-danger" role="alert">Group successfully deleted</div>')
}

const onUpdateSuccess = (data) => {
  $('.my-4').empty()
  $('.modal').modal('hide')
  $('.my-4').append('<div class="alert alert-success" role="alert">Successfully updated group!</div>')

  const showGroupHtml = createGroupTemplate({ group: data.group })

  $('.my-4').append(showGroupHtml)

  $('form').trigger('reset')
}

const onFailure = response => $('.my-4').append('<div class="alert alert-danger" role="alert">Something went wrong</div>')

module.exports = {
  onCreateSuccess,
  onFailure,
  getGroupsSuccess,
  onJoinSuccess,
  onUserGroupSuccess,
  onGroupMemberSuccess,
  onDeleteSuccess,
  onUpdateSuccess
}

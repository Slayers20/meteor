if (!Meteor.accounts)
  Meteor.accounts = {};

Meteor.accounts._resetPasswordUrl = function(baseUrl, token) {
  return baseUrl + '#reset-password/' + token;
};
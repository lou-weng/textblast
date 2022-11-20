const DataModel = require("./data-model");
// CRUD

// get all groups
exports.getAllGroups = async () => {
  return await DataModel.find();
};

// SUBSCRIBERS
// create subscriber
exports.createSubscriber = (sID, sPhone) => {
  let subscriber = {
    subscriberID: sID,
    subscriberPhone: sPhone,
  };
  this.updateGroup(groupMembers, subscriber);
};

// read subscriber
exports.getSubscriberById = async (sID) => {
  return await DataModel.findById(sID);
};

//MESSAGES
// create message
exports.createMessage = async (mID, mDateTime, mText) => {
  let message = {
    messageID: mID,
    messageDateTime: mDateTime,
    messageText: mText,
  };
  this.updateGroup(messages, message);
};

// read message
exports.getMessageById = async (mID) => {
  return await DataModel.findById(mID);
};

// GROUPS

// gMembers = arrayOfSubscriberDocuments
// messages = arrayOfMessages
// callback for these functions?

//create, read, and update
exports.createGroup = async (gID, gName) => {
  // Construct a group document
  let groupDocument = {
    groupID: gID,
    groupName: gName,
    members: null,
    messages: null,
  };

  return group;
};

exports.getGroupById = async (gID) => {
  return await DataModel.findById(gID);
};

exports.updateGroup = async (attributeID, attributeUpdate) => {
  return await DataModel.findByIdAndUpdate(attributeID, attributeUpdate);
};

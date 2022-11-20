const Schema = mongoose.Schema;
const dataSchema = Schema({
  groupID: Integer,
  groupName: Integer,
  groupMembers: {
    subscriberID: String,
    subscriberPhone: Integer,
  },
  messages: {
    messageID: Integer,
    messageDateTime: Date,
    messageContext: String,
  },
});

module.exports = mongoose.model("GroupSchema", dataSchema);

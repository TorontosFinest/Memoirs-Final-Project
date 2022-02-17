const { fetchSpecificMemoryData, fetchSpecifcMemoryOfUser, getUserIdByEmail } = require("../../Models/memoriesQuery");

const getOtherUserSpecificMemory = async (req, res) => {
  try {
    const { userId, memoryId, otherPersonEmailId } = req.params;
    const userIdResult = await getUserIdByEmail(otherPersonEmailId);
    if(!userIdResult?.id) {
        res.status(404).send({ msg: 'No user exists with given email' });
        return;
    }
    const { id: otherUserId } = userIdResult; 
    const memoryResult = await fetchSpecifcMemoryOfUser(otherUserId, memoryId);
    if (!memoryResult?.length) {
      res
        .status(200)
        .send({ msg: "No memory exist with this Id for given user-Id" });
      return;
    }
    const response = await fetchSpecificMemoryData(memoryId);
    res.status(200).send(response);
  } catch (e) {
    console.error(e);
    res.status(500).send(e.message);
  }
};

module.exports = getOtherUserSpecificMemory;

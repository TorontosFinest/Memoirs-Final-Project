const { getUserIdByEmail } = require("../../Models/memoriesQuery");
const fetchAllMemoriesService = require("../../services/memoriesServices/fetchAllMemoriesService");

  const getOtherUserAllMemoeries = async (req, res) => {
    try {
      const { userId, otherPersonEmailId } = req.params;
      const userIdResult = await getUserIdByEmail(otherPersonEmailId);
      if(!userIdResult?.id) {
          res.status(404).send({ msg: 'No user exists with given email' });
          return;
      }
      const result = await fetchAllMemoriesService(userIdResult.id);
      res.status(200).send(result);
    } catch (e) {
      console.error(e);
      res.status(500).send(e);
    }
  };
  
  module.exports = getOtherUserAllMemoeries;
  
const { fetchAllMemories } = require("../../Models/memoriesQuery");
const fetchAllMemoriesService = require("../../services/memoriesServices/fetchAllMemoriesService");

const getAllMemories = async (req, res) => {
  try {
    const { userId } = req.params;
    const memoryArr = await fetchAllMemoriesService(userId);
    res.status(200).send({ memoryArr });
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
};

module.exports = getAllMemories;

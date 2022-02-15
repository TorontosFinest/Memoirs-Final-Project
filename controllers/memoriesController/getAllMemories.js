const { fetchAllMemories } = require("../../Models/memoriesQuery");

const getAllMemories = async (req, res) => {
  try {
    const { userId } = req.params;
    const response = await fetchAllMemories(userId);
    const recordedIds = {};
    const memoryArr = [];
     response.forEach((res) => {
        const {name, description, id, image, user_id } =res;
        if(!recordedIds[id]) {
            recordedIds[id] = true;
            memoryArr.push({
                id,
                userId: user_id,
                name,
                description,
                image
            });
        }
    })
    res.status(200).send({ memoryArr });
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
};

module.exports = getAllMemories;
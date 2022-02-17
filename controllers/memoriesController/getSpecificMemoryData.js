const { fetchSpecificMemoryData, fetchSpecifcMemoryOfUser } = require("../../Models/memoriesQuery");

const getSpecificMemoryData = async (req, res) => {
  try {
    const { userId, memoryId } = req.params;
    const memoryResult = await fetchSpecifcMemoryOfUser(userId, memoryId);
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
    res.status(500).send(e);
  }
};

module.exports = getSpecificMemoryData;

const {
  updateMemory,
  fetchSpecifcMemoryOfUser,
} = require("../../Models/memoriesQuery");

const patchMemory = async (req, res) => {
  try {
    const { userId, memoryId } = req.params;
    const { name, description } = req.body;
    const memoryResult = await fetchSpecifcMemoryOfUser(userId, memoryId);
    if (!memoryResult?.length) {
      res
        .status(403)
        .send({ msg: "No memory exist with this Id for given user-Id" });
      return;
    }
    await updateMemory(name, description, memoryId);
    res.status(200).send({ msg: "success" });
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
};

module.exports = patchMemory;

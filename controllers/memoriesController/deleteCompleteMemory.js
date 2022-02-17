const {
    deleteCompleteMemoryFromDB,
    fetchSpecifcMemoryOfUser,
  } = require("../../Models/memoriesQuery");
  
  const deleteCompleteMemory = async (req, res) => {
    try {
      const { userId, memoryId } = req.params;
      const memoryResult = await fetchSpecifcMemoryOfUser(userId, memoryId);
      if (!memoryResult?.length) {
        res
          .status(403)
          .send({ msg: "No memory exist with this Id for given user-Id" });
        return;
      }
      await deleteCompleteMemoryFromDB(memoryId);
      res.status(200).send({ msg: "success" });
    } catch (e) {
      console.error(e);
      res.status(500).send(e);
    }
  };
  
  module.exports = deleteCompleteMemory;
  
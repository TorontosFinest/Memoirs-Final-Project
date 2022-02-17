const {
    fetchSpecifcMemoryOfUser,
    deleteMemoryImagesFromDB,
  } = require("../../Models/memoriesQuery");
  
  const deleteImagesFromMemory = async (req, res) => {
    try {
      const { userId, memoryId } = req.params;
      const { imgArr } = req.body;
      const memoryResult = await fetchSpecifcMemoryOfUser(userId, memoryId);
      if (!memoryResult?.length) {
        res
          .status(403)
          .send({ msg: "No memory exist with this Id for given user-Id" });
        return;
      }
      const response = await deleteMemoryImagesFromDB(memoryId, imgArr);
      res.status(200).send({ msg: "success" });
    } catch (e) {
      console.error(e);
      res.status(500).send(e);
    }
  };
  
  module.exports = deleteImagesFromMemory;
  
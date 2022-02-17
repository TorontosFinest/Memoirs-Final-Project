const {
    fetchSpecifcMemoryOfUser,
    insertImagesToMemory,
  } = require("../../Models/memoriesQuery");
  
  const postImagesToMemory = async (req, res) => {
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
      const response = await insertImagesToMemory(memoryId, userId, imgArr);
      const imgArrUpdated = response.map((data) => {
          const { id, image } = data.rows[0];
          return {
            imgId: id,
            image,
          }
      })
      res.status(200).send({ msg: "success", imgArr: imgArrUpdated });
    } catch (e) {
      console.error(e);
      res.status(500).send(e);
    }
  };
  
  module.exports = postImagesToMemory;
  
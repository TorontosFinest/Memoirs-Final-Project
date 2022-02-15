const { postMemories } = require("../../Models/memoriesQuery");

const createMemories = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      // If userId doesn't exists, memories cannot be created since it cannot be determined that to whom this memory belongs to
      res.status(405).send({ msg: "User-Id is required to create memories" });
      return;
    }
    const { name, description, imgArr } = req.body;
    const { memory, image } = await postMemories(
      userId,
      name,
      description,
      imgArr
    );
    const imageData = image.map((data) => {
      const { id, image: imageAdd } = data.rows[0];
      return {
        id,
        image: imageAdd,
      };
    });
    res.status(200).json({ msg: "success", memory, imageData });
  } catch (e) {
    console.error(e);
    res.status(500).send(e.name, e.message);
  }
};

module.exports = createMemories;
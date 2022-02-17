const client = require("../db/db");

const insertImagesToMemory = async (memoryId, userId, imgArr) => {
  try {
    await client.query("BEGIN");
    const postImagesPromiseArr = [];

    for (const imgAddress of imgArr) {
      const insertImagesQuery = {
        text: `INSERT INTO public.images(user_id, memory_id, image) VALUES($1, $2, $3) RETURNING *`,
        values: [userId, memoryId, imgAddress],
      };
      postImagesPromiseArr.push(client.query(insertImagesQuery));
    }
    const insertImagesResult = await Promise.all(postImagesPromiseArr);

    await client.query("COMMIT");
    return insertImagesResult;
  } catch (e) {
    const m = "Error while Adding Images to a memory in database";
    console.error(m, e);
    throw new Error(m, e);
  }
};

const postMemories = async (userId, name, description, imgArr) => {
  try {
    await client.query("BEGIN");
    const insertMemoryQuery = {
      text: `INSERT INTO public.memories(user_id, name, description) VALUES($1, $2, $3) RETURNING *`,
      values: [userId, name, description],
    };
    const memoryInsertionResult = await client.query(insertMemoryQuery);
    const { id: memoryId } = memoryInsertionResult.rows[0];

    const insertImagesResult = await insertImagesToMemory(
      memoryId,
      userId,
      imgArr
    );
    await client.query("COMMIT");
    const result = {
      memory: memoryInsertionResult.rows[0],
      image: insertImagesResult,
    };
    return result;
  } catch (e) {
    const m = "Error while posting memory data in database";
    console.error(m, e);
    throw new Error(m, e.message);
  }
};

const fetchAllMemories = async (userId) => {
  try {
    const selectMyMemoriesQuery = {
      text: `select memories.id, memories.user_id, memories."name", memories.description, images.image from public.memories join public.images on memories.id = images.memory_id and memories.user_id = $1`,
      values: [userId],
    };
    const selectMyMemoriesResult = await client.query(selectMyMemoriesQuery);
    const myMemories = selectMyMemoriesResult.rows;
    return myMemories;
  } catch (e) {
    const m = "Error while Fetching memory from database";
    console.error(m, e);
    throw new Error(m, e);
  }
};

const updateMemory = async (name, description, memoryId) => {
  try {
    await client.query("BEGIN");
    const updateMemoryQuery = {
      text: `UPDATE public.memories SET name=$1, description=$2 WHERE id=$3`,
      values: [name, description, memoryId],
    };
    await client.query(updateMemoryQuery);
    return await client.query("COMMIT");
  } catch (e) {
    const m = "Error while updating memory from database";
    console.error(m, e);
    throw new Error(m, e);
  }
};

const fetchSpecifcMemoryOfUser = async (userId, memoryId) => {
  try {
    const fetchSpecficMemoryOfUserQuery = {
      text: `SELECT id FROM public.memories WHERE user_id=$1 and id=$2`,
      values: [userId, memoryId],
    };
    const fetchSpecficMemoryOfUserResult = await client.query(
      fetchSpecficMemoryOfUserQuery
    );
    return fetchSpecficMemoryOfUserResult.rows;
  } catch (e) {
    const m =
      "Error while Fetching specific memory for spefic user from database";
    console.error(m, e);
    throw new Error(m, e);
  }
};

const deleteCompleteMemoryFromDB = async (memoryId) => {
  try {
    await client.query("BEGIN");
    const deleteCompleteMemoryQuery = {
      text: `DELETE FROM public.memories WHERE id=$1`,
      values: [memoryId],
    };
    await client.query(deleteCompleteMemoryQuery);
    return await client.query("COMMIT");
  } catch (e) {
    const m = "Error while Deleting Complete memory data from database";
    console.error(m, e);
    throw new Error(m, e);
  }
};

const fetchSpecificMemoryData = async (memoryId) => {
  try {
    const selecteMemoryQuery = {
      text: `SELECT * FROM public.memories WHERE id=$1`,
      values: [memoryId],
    };
    const memoryResult = await client.query(selecteMemoryQuery);
    const selectImagesQuery = {
      text: `SELECT id, image FROM public.images WHERE memory_id=$1`,
      values: [memoryId],
    };
    const imagesResult = await client.query(selectImagesQuery);

    return {
      ...memoryResult.rows[0],
      imgArr: imagesResult.rows,
    };
  } catch (e) {
    const m = "Error while Deleting Complete memory data from database";
    console.error(m, e);
    throw new Error(m, e);
  }
};

const deleteMemoryImagesFromDB = async (memoryId, imgArr) => {
  try {
    await client.query("BEGIN");
    const deleteImagesPromiseArr = [];

    for (const imgId of imgArr) {
      const deleteImagesQuery = {
        text: `DELETE FROM public.images WHERE id=$1 AND memory_id=$2`,
        values: [imgId, memoryId],
      };
      deleteImagesPromiseArr.push(client.query(deleteImagesQuery));
    }
    await Promise.all(deleteImagesPromiseArr);
    await client.query("COMMIT");
  } catch (e) {
    const m = "Error while Deleting Image from memory from database";
    console.error(m, e);
    throw new Error(m, e);
  }
};

const getUserIdByEmail = async (email) => {
  try {
    const selectUserIdQuery = {
      text: `SELECT id from public.users WHERE email=$1`,
      values: [email]
    }
    const result = await client.query(selectUserIdQuery);
    return result.rows[0];
  } catch (e) {
    const m = 'Error while fetching User-ID from Database';
    console.error(m, e);
    throw new Error(m, e);
  }
}

module.exports = {
  postMemories,
  fetchAllMemories,
  updateMemory,
  fetchSpecifcMemoryOfUser,
  deleteCompleteMemoryFromDB,
  fetchSpecificMemoryData,
  insertImagesToMemory,
  deleteMemoryImagesFromDB,
  getUserIdByEmail,
};

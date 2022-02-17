const { fetchAllMemories } = require("../../Models/memoriesQuery");

const fetchAllMemoriesService = async (userId) => {
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
    return memoryArr;
}

module.exports = fetchAllMemoriesService;
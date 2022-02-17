const express = require('express');
const memoriesRoutes = express.Router();

const deleteCompleteMemory = require('../controllers/memoriesController/deleteCompleteMemory');
const deleteImagesFromMemory = require('../controllers/memoriesController/deleteImagesFromMemory');
const getOtherUserAllMemoeries = require('../controllers/memoriesController/getOtherUserAllMemoeries');
const getOtherUserSpecificMemory = require('../controllers/memoriesController/getOtherUserSpecificMemory');
const patchMemory = require('../controllers/memoriesController/patchMemory');
const postImagesToMemory = require('../controllers/memoriesController/postImagesToMemory');
const createMemories = require('./../controllers/memoriesController/createMemories');
const getAllMemories = require('./../controllers/memoriesController/getAllMemories');
const getSpecificMemoryData = require('./../controllers/memoriesController/getSpecificMemoryData');

memoriesRoutes.post('/create/:userId', createMemories) // Create Memory
memoriesRoutes.patch('/edit/:memoryId/:userId', patchMemory) // Edit Memory
memoriesRoutes.post('/add/images/:memoryId/:userId', postImagesToMemory) // Add Images to a memory
memoriesRoutes.delete('/delete/images/:memoryId/:userId', deleteImagesFromMemory) // Delete Image from a memory
memoriesRoutes.delete('/delete/memory/:memoryId/:userId', deleteCompleteMemory) // Delete Complete Memory
memoriesRoutes.get('/view/allMemories/:userId/:otherPersonEmailId', getOtherUserAllMemoeries) // View Other User All Memories
memoriesRoutes.get('/view/memory/:userId/:otherPersonEmailId/:memoryId', getOtherUserSpecificMemory) // View Other User Specific Memory
memoriesRoutes.get('/view/allMyMemories/:userId', getAllMemories) // View  My All Memories
memoriesRoutes.get('/view/myMemory/:memoryId/:userId', getSpecificMemoryData) // View My Specific Memory

module.exports = memoriesRoutes;
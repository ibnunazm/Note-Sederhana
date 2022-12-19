const express = require('express');

const {
    createListData,
    getAllListData,
    getDataById,
    updateListData,
    deleteListData
} = require('../controller');

const router = express.Router();
router.post('/create', createListData);
router.get('/', getAllListData);
router.get('/:id', getDataById);
router.put('/update/:id', updateListData);
router.delete('/delete/:id', deleteListData);

module.exports = router;
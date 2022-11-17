const express = require('express');
const router = express.Router();
const job = require('../controllers/job.controller');

//endpoint to fetch all existing Jobs
router.get('/jobs', job.findAll);

//endpoint to create Jobs
router.post('/create/job', job.create);

//endpoint to update Jobs
router.put('/update/job/:id', job.updateById);

//endpoint to archive a job
router.put('/archive/job/:id', job.archiveById);

//endpoint to updates status' jobs
router.put('/status/:id/:status', job.updateStatus);

//endpoint to delete Jobs
router.delete('/delete/job/:id', job.deleteById);

module.exports = router;

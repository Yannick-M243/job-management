const express = require('express');
const router = express.Router();
const job = require('../controllers/job.controller');

//endpoint to fetch all existing Jobs
router.get('/jobs', function (req, res) {
    job.findAll(req, res);
});
//endpoint to create Jobs
router.post('/create/job', function (req, res) {
    job.create(req, res);
});
//endpoint to update Jobs
router.put('/update/job/:id', function (req, res) {
    job.updateById(req, res);
});
//endpoint to archive a job
router.put('/archive/job/:id', function (req, res) {
    job.archiveById(req, res);
});
//endpoint to updates status' jobs
router.put('/status/:id/:status', function (req, res) {
    job.updateStatus(req, res);
});
//endpoint to delete Jobs
router.delete('/delete/job/:id', function (req, res) {
    job.deleteById(req, res);
});
module.exports = router;

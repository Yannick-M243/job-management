const Job = require("../models/Job");

//Function to store a new Job to the database
exports.create = function (req, res) {
    const { name, description, location, priority, } = req.body;
    // Create and save a new blog
    let job = new Job({
        name: name,
        description: description,
        location: location,
        priority:priority
    });

    job.save(function (err, data) {
        if (err) {
            console.log(err);
            res.status(500).send({
                message: "Some error occurred while creating the job."
            });
        }
        else {
            console.log(data);
            res.send('The job has been added');
        }
    });
};

//Function to get all existing jobs from the database
exports.findAll = function (req, res) {
    Job.find(function (err, jobs) {
        if (err) {
            console.log(err);
            res.status(500).send({
                message: "Some error occurred while retrieving jobs"
            });
        }
        else {
            res.send(jobs);
        }
    });
};

//Function to Update an existing Job in the database using its Id
exports.updateById= function (req, res) {
    const id = req.params.id;
    const { name, description, location, priority, status, submission } = req.body;
    let query = { _id: id };
    Job.findOneAndUpdate(query, {
        name: name,
        description: description,
        location: location,
        priority: priority,
        status: status,
        submission: submission
    },
        { new: true }, function (err, doc) {
            if (err) {
                console.log("Something went wrong when updating data.");
            }
            res.send("Updated");
        });
};

//Function to archive an existing Job in the database using its Id
exports.archiveById = function (req, res) {
    const id = req.params.id;
    let query = { _id: id };
    Job.findOneAndUpdate(query, {archived: true},
        { new: true }, function (err, doc) {
            if (err) {
                console.log("Something went wrong when archiving data.");
            }
            res.send("Job archived");
        });
};

//Function to update multiple Job's status in the database using its id
exports.updateStatus = function (req, res) {
    const id = req.params.id;
    const status = req.params.status;
    let query = { _id: id };
    Job.findOneAndUpdate(query, { $set: { status: status } },
        { new: true }, function (err, doc) {
            if (err) {
                console.log("Something went wrong when archiving data.");
            }
            res.send("Status updated on the selected Jobs");
        });
};

//Function to delete an existing Job in the database using its Id
exports.deleteById = function (req, res) {
    const id = req.params.id;
    Job.remove({ _id: id }, function (err) {
        if (err) return handleError(err);
        console.log("Blogs removed");
        res.send("Blogs removed");
    });
};

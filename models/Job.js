const mongoose = require('mongoose');

let jobSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true,
    },
    priority: {
        type: String,
        required: false,
    },
    status: {
        type: String,
        required: true,
        default: "submitted"
    },
    submission_date: {
        type: Date,
        required: true,
        default: Date.now
    },
    archived: {
        type: Boolean,
        required: true,
        default: false
    }
});

let Job = mongoose.model('Job', jobSchema);

module.exports = Job;
const { underThreeJobs } = require('../underThreeJobs.js'); // Import the array

function haveMoreThanThreeJobs (jobsFiltered){
    // this is a function that returns a boolean function
    // true if jobsFiltered contains more than 3 jobs
    // false otherwise
    if (jobsFiltered.length > 2 ){
        return true
    } else if (jobsFiltered.length > 0){
        jobsFiltered.forEach((job) => {
            if (!underThreeJobs.includes(job)) {underThreeJobs.push(job)}
        })
        return false  
    } else {
        return false  
    }
}

module.exports = haveMoreThanThreeJobs

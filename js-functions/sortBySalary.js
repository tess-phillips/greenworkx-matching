const { underThreeJobs } = require('../underThreeJobs.js'); // Import the array

function sortBySalary(jobs) {
    // Sort the jobs based on their medium salary in descending order
    const sortedJobs = jobs.sort((a, b) => b.salaryRange.medium - a.salaryRange.medium);
  
    // Ensures the initial, more closely matched jobs come first, regardless of salary
    underThreeJobs.forEach((job) => {
        sortedJobs.unshift(job)
    })

    // Return the top 3 jobs
    return sortedJobs.slice(0, 3);
}

module.exports = sortBySalary
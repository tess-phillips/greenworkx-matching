const jobs = require("./jobs.js")
const willingnessFilter = require("./willingnessFilter.js")

let range = 0.1
let increasedRangeThisManyTimes = 0
let numberOfTimesToIncreaseRange = 5
let underThreeJobs = []
const increaseRangeBy = 0.2

// This value is a test input.
const userWillingnessInputs = [0.2, 0.2, 0.5];

function haveMoreThanThreeJobs (jobsFiltered){
    if (jobsFiltered.length > 3 ){
        // sortBySalary(jobsFiltered)
        return true
    } else if (jobsFiltered.length > 0){
        range += increaseRangeBy  
        jobsFiltered.forEach((job) => {
            if (!underThreeJobs.includes(job)) {underThreeJobs.push(job)}
        })
        return false  
    } else {
        range += increaseRangeBy  
        return false  
    }
}

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


// This is where it starts checking for relevant jobs.
while (increasedRangeThisManyTimes < numberOfTimesToIncreaseRange){
    jobsFiltered = willingnessFilter(jobs, userWillingnessInputs, range);
    if (haveMoreThanThreeJobs(jobsFiltered)){
        //the following line ends the while loop
        increasedRangeThisManyTimes = 100
        console.log(sortBySalary(jobsFiltered))
    }
    else {
        console.log(`${jobsFiltered.length} jobs, now expand your search`)
        increasedRangeThisManyTimes ++
        if (increasedRangeThisManyTimes == 5){
            console.log("we couldn't match you to any relevant jobs. heres all the jobs we have on offer instead")
        }
    }
}
let underThreeJobs = require("./underThreeJobs.js")
const jobs = require("./jobs.js")
const willingnessFilter = require("./js-functions/willingnessFilter.js")
const haveMoreThanThreeJobs = require("./js-functions/haveMoreThanThreeJobs.js")
const sortBySalary = require("./js-functions/sortBySalary.js")

// initialising values
let range = 0.1 // the range of willingnessInputs to be considered
let increasedRangeThisManyTimes = 0
const numberOfTimesToIncreaseRange = 5
const increaseRangeBy = 0.2
module.exports = underThreeJobs


// This value is a test input. Experiment with these (one at a time)
const userWillingnessInputs = [1, 0.9, 0.5];
// const userWillingnessInputs = [0.8, 1, 0.8];
// const userWillingnessInputs = [1, 1, 0.8];
// const userWillingnessInputs = [0.2, 0.2, 0.2];
// const userWillingnessInputs = [1, 0, -1];


// This is where the algorithm starts checking for relevant jobs.
while (increasedRangeThisManyTimes < numberOfTimesToIncreaseRange){
    jobsFiltered = willingnessFilter(jobs, userWillingnessInputs, range);
    if (haveMoreThanThreeJobs(jobsFiltered)){
        //the following line ends the while loop
        increasedRangeThisManyTimes = 100
        console.log(sortBySalary(jobsFiltered))
    }
    else {
        // console.log(`${jobsFiltered.length} jobs, now expand your search`)
        range += increaseRangeBy  
        increasedRangeThisManyTimes ++
        if (increasedRangeThisManyTimes == 5){
            console.log("we couldn't match you to any relevant jobs. heres the top jobs we have on offer instead")
            console.log(sortBySalary(jobs))
        }
    }
}
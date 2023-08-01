// Notes for Jess
// I know the values come in slightly different ranges but for now
// I am assuming the user inputs come in a normalised form e.g.
// willingnessToWorkOutdoors, integer number (in range -1 to 1)
// willingnessToLearnHandsOnSkills, integer number (in range -1 to 1)
// willingnessToWorkWithTechnology, integer number (in range -1 to 1)
// currentAnnualSalaryEquivalent, number (0 or above)

// run with node sript.js command in commandline
// test with npx jest results.test.js in command line

const jobs = require("./jobs.js")
const willingnessFilter = require("./willingnessFilter.js")

// let listOfJobOpportunities = []
// let jobsFiltered

let range = 0.1
const userWillingnessInputs = [0.2, 0.2, 0.5];

jobsFiltered = willingnessFilter(jobs, userWillingnessInputs, range);
console.log(jobsFiltered)
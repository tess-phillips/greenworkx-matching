// Notes for Jess
// I know the values come in slightly different ranges but for now
// I am assuming the user inputs come in a normalised form e.g.
// willingnessToWorkOutdoors, integer number (in range -1 to 1)
// willingnessToLearnHandsOnSkills, integer number (in range -1 to 1)
// willingnessToWorkWithTechnology, integer number (in range -1 to 1)
// currentAnnualSalaryEquivalent, number (0 or above)

const jobs = require("./jobs.js")
const willingnessFilter = require("./willingnessFilter.js")
// let listOfJobOpportunities = []
let range = 0.1



  
// Example usage:
const userWillingnessInputs = [-0.2, 0.2, 0.5];
willingnessFilter(jobs, userWillingnessInputs, range);
  
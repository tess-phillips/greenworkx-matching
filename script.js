// Notes for Jess
// I know the values come in slightly different ranges but for now
// I am assuming the user inputs come in a normalised form e.g.
// willingnessToWorkOutdoors, integer number (in range -1 to 1)
// willingnessToLearnHandsOnSkills, integer number (in range -1 to 1)
// willingnessToWorkWithTechnology, integer number (in range -1 to 1)
// currentAnnualSalaryEquivalent, number (0 or above)

const jobs = require("./jobs.js")
// let listOfJobOpportunities = []
let range = 0.1

/**
 * 
 * @param {*} jobs The jobs array given.
 * @param {*} userWillingnessInputs [willingnessToWorkOutdoors, willingnessToLearnHandsOnSkills, willingnessToWorkWithTechnology]
 * @param {*} range number between 0 and 0.5 (0.5 is arbitrary)
 */
function willingnessFilter(jobs, userWillingnessInputs, range) {
    const jobsFiltered = jobs.filter((job) => {
      const { outdoorsExtent, handsOnExtent, technologyExtent } = job;
  
      const withinRange = (input, extent) => {
        // if (input < 0) {
        //   // For negative inputs, consider it as a wildcard (no filter)
        //   return true;
        // }
        return Math.abs(input - extent) <= range;
      };
  
      // if job is within range of userWillingnessInputs then the following booleans are true
      const isOutdoorsExtentInRange = withinRange(userWillingnessInputs[0], outdoorsExtent);
      const isHandsOnExtentInRange = withinRange(userWillingnessInputs[1], handsOnExtent);
      const isTechnologyExtentInRange = withinRange(userWillingnessInputs[2], technologyExtent);
  
      // if all 3 booleans are true then keep it in the filtered list as the job is within range
      return isOutdoorsExtentInRange && isHandsOnExtentInRange && isTechnologyExtentInRange;
    });
  
    return jobsFiltered;
}

module.exports = willingnessFilter
  
// Example usage:
const userWillingnessInputs = [-0.2, 0.2, 0.5];
willingnessFilter(jobs, userWillingnessInputs, range);
  
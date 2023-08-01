/**
 * This function filters the jobs given to produce a new array of jobs, only within the range or the userWillingnessInputs.
 * @param {*} jobs The jobs array given.
 * @param {*} userWillingnessInputs [willingnessToWorkOutdoors, willingnessToLearnHandsOnSkills, willingnessToWorkWithTechnology]
 * @param {*} range number between 0 and 0.5 (0.5 is arbitrary)
 */
function willingnessFilter(jobs, userWillingnessInputs, range) {
    const jobsFiltered = jobs.filter((job) => {
      const { outdoorsExtent, handsOnExtent, technologyExtent } = job;
  
      // finds out if the value (for the job) is within the range of the value (given by user). returns a boolean.
      const withinRange = (input, extent) => {
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

// match scores version (explanation in readme)

// function willingnessFilter(jobs, userWillingnessInputs, range) {
//   userScore = createScore(userWillingnessInputs[0],userWillingnessInputs[1],userWillingnessInputs[2])
//   const jobsFiltered = jobs.filter((job) => {
//   const { outdoorsExtent, handsOnExtent, technologyExtent } = job;
//   jobScore = createScore([outdoorsExtent, handsOnExtent, technologyExtent])

//   // finds out if the value (for the job) is within the range of the value (given by user). returns a boolean.
//   const withinRange = (input, extent) => {
//     return Math.abs(input - extent) <= range;
//   };

//   // if job is within range of userWillingnessInputs then the following booleans are true
//   const isUserScoreInRange = withinRange(userScore, jobScore);

//   // if the boolean is true then keep it in the filtered list as the job is within range
//   return isUserScoreInRange ;
//   });
//   return jobsFiltered;
// }
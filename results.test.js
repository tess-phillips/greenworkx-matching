const willingnessFilter = require('./script.js'); // Adjust the path based on your project structure
const jobs = require("./jobs.js")


describe('willingnessFilter function', () => {
    test('filters jobs with exact matching preferences', () => {
      const userWillingnessInputs = [1, 1, 0.8];
      const range = 0.1;
      const filteredJobs = willingnessFilter(jobs, userWillingnessInputs, range);
  
      expect(filteredJobs).toHaveLength(1);
      expect(filteredJobs[0].name).toBe('Solar Panel Installer');
    });
  
    test('filters jobs with relaxed preferences within range', () => {
      const userWillingnessInputs = [0.9, 0.9, 0.7];
      const range = 0.2;
      const filteredJobs = willingnessFilter(jobs, userWillingnessInputs, range);
  
      expect(filteredJobs).toHaveLength(2);
      expect(filteredJobs[0].name).toBe('Solar Panel Installer');
      expect(filteredJobs[1].name).toBe('Heat Pump Engineer');
    });  
    // Add more test cases for different scenarios and edge cases
  });

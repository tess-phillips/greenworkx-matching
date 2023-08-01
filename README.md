## Assumptions

At the moment I'm assuming the userInputs are coming to this feature in the format as shown below. 
`const userWillingnessInputs = [0.2, 0.2, 0.5];`
I am also assuming the values are normalised.

## Understanding the filestructure

The main file to run is the script.js file. The relevant helper functions are in js-functions.

## Usage

Run with node sript.js command in commandline

## Testing

Test with npx jest results.test.js in command line.
Currently only have basic tests for the willingnessFilter.js


## Matching Scores vs Filtering role data

I couldn't find any reference to the career paths you mentioned so I've taken a slightly different route to begin executing the task. Instead of having 'match scores' I have been filtering the jobs by how closely the willingnessTo scores (e.g. willingnessToWorkOutdoors) match with the extent scores (outdoorsExtent). 
I avoided creating the scores because I think it will require a bit more thought/ research on existing matching algorithms. At a glance, if I had done a multiplication system e.g. outdoor * handsOn * technology we would have actually lost quite a bit of information from the user because then [0,1,1] would have the same score as [1,1,0]. 
I have added an alternative version of the willingnessFilter in willingnessFilter.js, so that it will be an easy switch over should we decide to implement a scoring system.


## Time spent so far

30 mins planning
3 hrs 16 mins WakaTime 
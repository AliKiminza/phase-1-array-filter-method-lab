// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, match) {
  return drivers.filter(driver => driver.toLowerCase() === match.toLowerCase());
}

function fuzzyMatch(drivers, trial) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(trial.toLowerCase()));
  }

  function matchName(drivers, final) {
    return drivers.filter(driver => driver.name.toLowerCase() === final.toLowerCase());
  }

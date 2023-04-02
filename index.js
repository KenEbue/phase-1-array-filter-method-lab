const drivers = [
    { name: 'Bobby', hometown: 'Pittsburgh' },
    { name: 'Sammy', hometown: 'New York' },
    { name: 'Sally', hometown: 'Cleveland' },
    { name: 'Annette', hometown: 'Los Angeles' },
    { name: 'Bobby', hometown: 'Tampa Bay' }
  ];
  
  function findMatching(drivers, string) {
    return drivers.filter(driver =>
      driver.toLowerCase() === string.toLowerCase()
    );
  }
  
  function fuzzyMatch(drivers, string) {
    return drivers.filter(driver =>
      driver.toLowerCase().indexOf(string.toLowerCase()) === 0
    );
  }
  
  function matchName(drivers, string) {
    return drivers.filter(driver =>
      driver.name.toLowerCase() === string.toLowerCase()
    );
  }
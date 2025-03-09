function getUserLevel(xp) {
    // Define the XP thresholds for each level
    const levelThresholds = [
      { level: 1, xp: 0 },
      { level: 2, xp: 20 },
      { level: 3, xp: 80 },
      { level: 4, xp: 160 },
      { level: 5, xp: 300 },
      { level: 6, xp: 500 },
      { level: 7, xp: 600 },
      { level: 8, xp: 800 },
      { level: 9, xp: 1000 },
      { level: 10, xp: 1500 }
      // Add more levels as needed
    ];
  
    // Find the highest level the user qualifies for
    for (let i = levelThresholds.length - 1; i >= 0; i--) {
      if (xp >= levelThresholds[i].xp) {
        return levelThresholds[i].level;
      }
    }
  
    // Default to level 1 if something goes wrong
    return 1;
  }
  
export default getUserLevel
function timeLeftBefore24Hours(isoTimeString) {
    // Parse the input time
    const startTime = new Date(isoTimeString);
    
    // Calculate the time 24 hours after the input time
    const endTime = new Date(startTime.getTime() + 24 * 60 * 60 * 1000);
    
    // Get current time
    const currentTime = new Date();
    
    // Calculate time difference in milliseconds
    const timeLeftMs = endTime - currentTime;
    
    // If time has already passed, return 0
    if (timeLeftMs <= 0) {
      return "No time left.";
    }
    
    // Convert milliseconds to hours, minutes, and seconds
    const hours = Math.floor(timeLeftMs / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeftMs % (1000 * 60 * 60)) / (1000 * 60));
    
    return [hours, minutes];
  }

export default timeLeftBefore24Hours;
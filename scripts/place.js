// place.js
document.addEventListener("DOMContentLoaded", () => {
    // Last Modified date in footer
    document.getElementById("lastModified").textContent = document.lastModified;
  
    // Example wind chill calculation in Fahrenheit
    function calculateWindChill(tempF, windMph) {
      if (tempF <= 50 && windMph > 3) {
        const chill =
          35.74 +
          0.6215 * tempF -
          35.75 * Math.pow(windMph, 0.16) +
          0.4275 * tempF * Math.pow(windMph, 0.16);
        return chill.toFixed(2);
      }
      return "N/A";
    }
  
    // Static example
    const tempF = 30;
    const windMph = 10;
  
    const windChillSpan = document.getElementById("windChill");
    windChillSpan.textContent = calculateWindChill(tempF, windMph);
  });
  
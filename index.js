const tutorials = [
  "what does the this keyword mean?",
  "what is the constructor oo pattern?",
  "implementing blockchain web api",
  "the test driven development workflow",
  "what is nan and how can we check for it",
  "what is the difference between stopPropagation and preventDefault?",
  "immutable state and pure functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?"
];

const titleCased = () => {
  return tutorials.map(tutorial => {
    return tutorial
      .split(" ") // Split into words
      .map(word => {
        // Handle special acronyms properly
        if (word.toLowerCase() === "oo") return "OO";
        if (word.toLowerCase() === "api") return "API";
        if (word.toLowerCase() === "nan") return "NaN"; // Fixed this line
        if (word.toLowerCase() === "jsonp") return "JSONP"; // Fixed this line

        // Capitalize first letter normally
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" "); // Join words back into a string
  });
};

console.log(titleCased());

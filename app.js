const path = require("path");

// Get the module name from the command-line argument
const moduleName = process.argv[2]; // The module to run, e.g., "builder" or "singleton"

if (!moduleName) {
  console.log("Please specify a module to run: e.g., 'node app.js builder'");
  process.exit(1);
}

try {
  // Construct the path to the module's index file
  const modulePath = path.join(__dirname, moduleName, "index.js");
  const module = require(modulePath);

  if (typeof module.run === "function") {
    console.log(`Running ${moduleName} module...`);
    module.run(); // Run the module's main function
  }
} catch (error) {
  console.error(`Error loading module "${moduleName}":`, error.message);
}

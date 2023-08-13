var ghpages = require("gh-pages");

ghpages.publish(
  "public",
  {
    branch: "gh-pages",
    repo: "https://github.com/dahliabloom/guess-who.git",
  },
  () => {
    console.log("Deploy Complete!");
  }
);

import ghpages from "gh-pages";

ghpages.publish(
  "dist",
  {
    branch: "gh-pages",
    repo: "https://github.com/dahliabloom/guess-who.git",
  },
  () => {
    console.log("Deploy Complete!");
  }
);

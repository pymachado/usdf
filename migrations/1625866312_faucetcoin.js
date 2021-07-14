const USDF = artifacts.require("USDF");

module.exports = function(_deployer) {
  _deployer.deploy(USDF);
  // Use deployer to state migration tasks.
};

import * as bitcoin from "bitcoinjs-lib";

function isValidBtcAddress(address) {
  try {
    bitcoin.address.toOutputScript(address);
    return true;
  } catch (error) {
    return false;
  }
}

const utils = {
  isValidBtcAddress,
};

module.exports = utils;

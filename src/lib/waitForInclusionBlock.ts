
export const waitForInclusionInBlock = async (lcd, txHash) => {
  let res;
  for (let i = 0; i <= 50; i++) {
    try {
      res = await lcd.tx.txInfo(txHash);
    } catch (error) {
      // NOOP
    }

    if (res) {
      break;
    }

    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  return res;
};
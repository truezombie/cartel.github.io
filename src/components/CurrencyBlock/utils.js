export const getCurrency = (
  currency,
  purKey,
  salKey,
  desc,
  startIndex,
  arrayCurrNames
) =>
  arrayCurrNames.map((item, index) => {
    return {
      from: item.from,
      to: item.to,
      pur: currency[index + startIndex][purKey]["$t"],
      sal: currency[index + startIndex][salKey]["$t"],
      descr: currency[index + startIndex][desc]
        ? currency[index + startIndex][desc]["$t"]
        : undefined
    };
  });

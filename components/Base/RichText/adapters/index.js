// RULES ARE DEPRECATED DUE TO REMARK-BREAK
// Will be turned off until there are more rules

export const TEXT_RULES = {
  '!jump!': '&nbsp;',
};

export const replaceRulesOnText = (text = '') => {
  let parsedText = text;

  Object.keys(TEXT_RULES).forEach((rule) => {
    const ruleRegex = new RegExp(rule, 'gi');

    parsedText = parsedText.replace(ruleRegex, TEXT_RULES[rule]);
  });

  return parsedText;
};

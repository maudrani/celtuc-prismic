export const TEXT_RULES = {
  '!jump!': '&nbsp;',
};

export const replaceRulesOnTextText = (text = '') => {
  let parsedText = text;

  Object.keys(TEXT_RULES).forEach((rule) => {
    const ruleRegex = new RegExp(rule, 'gm');

    parsedText = parsedText.replace(ruleRegex, TEXT_RULES[rule]);
  });

  return parsedText;
};

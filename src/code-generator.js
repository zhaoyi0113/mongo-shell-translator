const escodegen = require('escodegen');

const options = {
  format: {
    indent: {
      style: '    ',
      base: 0,
      adjustMultilineComment: false,
    },
    newline: '\n',
    space: ' ',
    json: false,
    renumber: false,
    hexadecimal: false,
    quotes: 'single',
    escapeless: false,
    compact: false,
    parentheses: true,
    semicolons: true,
    safeConcatenation: false,
  },
  moz: {
    starlessGenerator: false,
    parenthesizedComprehensionBlock: false,
    comprehensionExpressionStartsWithAssignment: false,
  },
  parse: null,
  comment: false,
  sourceMap: undefined,
  sourceMapRoot: null,
  sourceMapWithCode: false,
  file: undefined,
  sourceContent: 'originalSource',
  directive: false,
  verbatim: undefined,
};

const generate = (ats) => {
  return escodegen.generate(ats, options);
};

module.exports = generate;

/**
 * Tests para la regla 'no-jquery'.
 *
 * @author jaiba-man
 */
const { RuleTester } = require('eslint');
const { rules } = require('../index');

const tester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2015,
    sourceType: "module",
  },
});

const codeInvalid = 'import "jquery";';
const codeValid = 'import "./my-module";';
const errors = [{
    message: 'La importación de jQuery está prohibida.',
    type: 'ImportDeclaration'
  }];
  tester.run("no-jquery", rules["no-jquery"], {
    invalid: [{ code: codeInvalid, errors }],
    valid: [{ code: codeValid}]
  });


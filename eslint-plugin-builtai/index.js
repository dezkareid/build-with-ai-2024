/**
 * Plugin ESLint de ejemplo con regla 'no-jquery'.
 *
 * @author jaiba-man
 */
module.exports = {
  rules: {
    /**
     * Regla que detecta y reporta la importación de jQuery.
     *
     * @author jaiba-man
     */
    "no-jquery": {
      create(context) {
        return {
          ImportDeclaration(node) {
            if (node.source.value === 'jquery') {
              context.report({
                node: node,
                message: "La importación de jQuery está prohibida."
              });
            }
          }
        };
      }
    }
  }
};

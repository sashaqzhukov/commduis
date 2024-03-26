const assert = require('assert');

describe('Translate', () => {
  it('should translate "program development resources" to "recursos de desarrollo de programas"', () => {
    // Assuming 'translate' is a function that translates English to Spanish
    const translated = translate('program development resources');
    assert.strictEqual(translated, 'recursos de desarrollo de programas');
  });
});

function translate(text) {
  // Mock translation function for demonstration purposes
  const translations = {
    'program development resources': 'recursos de desarrollo de programas'
  };
  return translations[text];
}

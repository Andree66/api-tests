const fetchDataWithHeaders = require('./scr/requestWithHeaders');
const { expect } = require('@jest/globals');

test('should include correct headers and params', async () => {
  const config = await fetchDataWithHeaders();
  
  expect(config.headers['Custom-Header']).toBe('TestValue');
  expect(config.params.userId).toBe(1);
});
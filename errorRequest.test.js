const fetchInvalidUrl = require('./scr/errorRequest');
const { expect } = require('@jest/globals');

test('should return an error message for an invalid URL', async () => {
  const errorMessage = await fetchInvalidUrl();
  expect(errorMessage).toMatch(/Network Error|ENOTFOUND/);
});
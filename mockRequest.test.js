const axios = require('axios');
const { expect } = require('@jest/globals');
const fetchMockData = require('./scr/mockRequest');

jest.mock('axios');

test('should return mocked successful response', async () => {
  const mockResponse = { data: { message: 'Success' } };
  axios.get.mockResolvedValue(mockResponse);

  const data = await fetchMockData('https://fakeapi.com/data');
  expect(data).toEqual({ message: 'Success' });
});

test('should return mocked error response', async () => {
  axios.get.mockRejectedValue(new Error('Request failed'));

  const data = await fetchMockData('https://fakeapi.com/data');
  expect(data).toEqual({ error: 'Request failed' });
});
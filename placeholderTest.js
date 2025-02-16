const axios = require('axios');
const { expect } = require('@jest/globals');

// npx jest placeholderTest.spec.js

describe("JSONPlaceholder API Tests", () => {

  test("Get all users", async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log(response.data[1]);   

    expect(response.status).toEqual(200);  
    expect(response.data[0]).toHaveProperty('id');   
    expect(response.data[0]).toHaveProperty('name'); 
  });

  test("Get one todos", async () => {
    const Id = 3;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${Id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log(response.data);

    expect(response.status).toEqual(200);
    expect(response.data.id).toEqual(Id); 
    expect(response.data).toHaveProperty('title');
  });

  test("Get all posts", async () => {    
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log(response.data[3]);

    expect(response.status).toEqual(200);
    expect(response.data[3]).toHaveProperty('title'); 
    expect(response.data[3]).toHaveProperty('body');  
  });

  test("Create a new post", async () => {
    const newPost = {
      title: 'New Test Post123',
      body: 'This is a test post123',
      userId: 1,
    };

    const response = await axios.post(`https://jsonplaceholder.typicode.com/posts`, newPost, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log(response.data);

   
    expect(response.status).toEqual(201);
    expect(response.data).toMatchObject(newPost);
  });

  test("Create another post", async () => {
    const anotherPost = {
      title: 'Another Test Post',
      body: 'This is another test post',
      userId: 2,
    };

    const response = await axios.post(`https://jsonplaceholder.typicode.com/posts`, anotherPost, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log(response.data);
    
    expect(response.status).toEqual(201);
    expect(response.data).toMatchObject(anotherPost);
  });

})
const userModel = require('./auth-model');
const db = require('../database/dbConfig');

beforeEach(async () => {
  await db('users').truncate();
});

describe('Users model', () => {
  describe('insert function', () => {
    let users;
    test('should insert a new user', async () => {
      await userModel.postUser({
        username: 'user1',
        password: 'pass1'
      });
      await userModel.postUser({
        username: 'user2',
        password: 'pass2'
      });
      await userModel.postUser({
        username: 'user3',
        password: 'pass3'
      });

      users = await db('users');
      expect(users).toHaveLength(3);
    });
  });
});

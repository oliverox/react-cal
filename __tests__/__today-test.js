// __tests__/today-test.js
jest.dontMock('../index.js')
    .dontMock('moment');

describe('today', function() {
 it('displays today\'s date in format DD M YYYY', function() {
   var moment = require('moment');
   var Calendar = require('../index');
   var date = new Date();
   expect(Calendar.today()).toBe(date.getDate() + ' ' + (("0" + (date.getMonth() + 1)).slice(-2)) + ' ' + date.getFullYear());
 });
});

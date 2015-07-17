'use strict';

// Node modules
var React = require('react/addons');
var moment = require('moment');

// Custom components
var Header = require('./header');
var Weekday = require('./weekday');
var Day = require('./day');

/**
 * Date-grid sub component
 *
 * Displays a grid of dates for the current month
 */
var Dategrid = React.createClass({

  displayName: 'Dategrid',

  mixins: [React.addons.PureRenderMixin],

  render: function() {
    var type = 1;
    var count = 1;
    var loop = true;
    var week = [];
    var dategrid = [
      React.createElement(Header, {key: 'header', currentMoment: this.props.currentMoment, goToPreviousMonth: this.props.goToPreviousMonth, goToNextMonth: this.props.goToNextMonth}),
      React.createElement(Weekday, {key: 'weekday', days: moment.weekdaysMin()})
    ];
    var m1 = this.props.currentMoment.clone();
    var m2 = this.props.currentMoment.clone().date(this.props.currentMoment.daysInMonth()); // point to last day of month
    if (m1.date() > 1) { // if we're not the first of the month
      m1 = m1.subtract(m1.date() - 1, 'day'); // get to the first day of the current month
    }
    m1 = m1.weekday(0); // get to the first day of that week

    // while (m1.isBefore(m2) || m1.isSame(m2)) {
    while (loop) {
      if (m1.month() !== this.props.currentMoment.month()) {
        type = 0;
      }
      else {
        if (m1.diff(this.props.today) === 0) {
          type = 2;
        }
        else {
          type = 1;
        }
      }
      week.push(React.createElement(Day, {key: 'day' + count, type: type, value: m1.clone(), onDateClick: this.props.onDateClick}));
      if (count % 7 === 0) {
        dategrid.push(React.createElement('div', {key: 'week' + count, className: 'dates-row small'}, week));
        week = [];
        if (m1.isAfter(m2)) {
          loop = false;
        }
      }
      count++;
      m1.add(1, 'day');
    }
    return (React.createElement('div', {key: 'grid', className: this.props.showDategrid ? 'dategrid' : 'dategrid hidden'}, dategrid));
  }
});

module.exports = Dategrid;

'use strict';

// Node modules
var React = require('react/addons');
var moment = require('moment');

// Custom components
var Header = require('./header');
var Weekday = require('./weekday');
var DateGrid = require('./date-grid');

/**
 * The Calendar
 *
 * Displays a calendar of the current month
 */
var Calendar = React.createClass({

  mixins: [React.addons.PureRenderMixin],

  getDefaultProps: function() {
    return {
      view: 'month',
      today: moment()
    };
  },

  getStateFromMoment: function(currentMoment) {
    return {
      currentMoment: currentMoment,
      year: currentMoment.format("YYYY"),
      month: currentMoment.format("MMMM")
    };
  },

  getInitialState: function() {
    return this.getStateFromMoment(this.props.today.clone());
  },

  goToPreviousMonth: function() {
    this.setState(this.getStateFromMoment(moment(this.state.currentMoment).subtract({months: 1})));
  },

  goToNextMonth: function() {
    this.setState(this.getStateFromMoment(moment(this.state.currentMoment).add({months: 1})));
  },

  render: function() {
    var calendarOutput;

    // year view

    // week view

    // month view
    if (this.props.view === 'month') {
      calendarOutput = React.createElement('div', {className: 'reactcal-container'}, [
        React.createElement(Header, {
          key: 1,
          view: this.props.view,
          month: this.state.month,
          year: this.state.year,
          showNavigation: true,
          goToPreviousMonth: this.goToPreviousMonth,
          goToNextMonth: this.goToNextMonth
        }),
        React.createElement(Weekday, {key: 2, days: moment.weekdaysShort()}),
        React.createElement(DateGrid, {key: 3, today: this.props.today, currentMoment: this.state.currentMoment})
      ]);
    }
    return calendarOutput;
  }
});

module.exports = Calendar;

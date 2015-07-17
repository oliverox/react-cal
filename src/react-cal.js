'use strict';

// Node modules
var React = require('react/addons');
var moment = require('moment');

// Custom components
var Datepicker = require('./datepicker');
var Dategrid = require('./dategrid');

/**
 * The Calendar
 *
 * Displays a calendar of the current month
 */
var Calendar = React.createClass({

  displayName: 'Calendar',

  mixins: [React.addons.PureRenderMixin],

  getDefaultProps: function() {
    return {
      view: 'month',
      type: 'calendar',
      today: moment()
    };
  },

  getStateFromMoment: function(newMoment) {
    return {
      currentMoment: newMoment
    };
  },

  getInitialState: function() {
    return {
      showDategrid: (this.props.type === 'datepicker') ? false : true,
      currentMoment: this.props.today.clone(),
      label: 'Select date'
    };
  },

  goToPreviousMonth: function() {
    this.setState({
      currentMoment: moment(this.state.currentMoment).subtract({months: 1})
    });
  },

  goToNextMonth: function() {
    this.setState({
      currentMoment: moment(this.state.currentMoment).add({months: 1})
    });
  },

  toggleCalendar: function() {
    this.setState({
      showDategrid: !this.state.showDategrid
    });
  },

  onDateClick: function(newMoment) {
    console.log('new moment=', newMoment);
    this.setState({
      label: moment(newMoment).format('ddd, MMM D')
    });
  },

  render: function() {
    var calendarOutput,
        datePicker = React.createElement(Datepicker, {
          key: 'datepicker',
          showDategrid: this.state.showDategrid,
          toggleCalendar: this.toggleCalendar,
          label: this.state.label
        }),
        dateGrid = React.createElement(Dategrid, {
          key: 'dategrid',
          today: this.props.today,
          showNavigation: true,
          showDategrid: this.state.showDategrid,
          currentMoment: this.state.currentMoment,
          goToPreviousMonth: this.goToPreviousMonth,
          goToNextMonth: this.goToNextMonth,
          onDateClick: this.onDateClick
        });

    // month view
    if (this.props.view === 'month') {
      var subElements = [];

      // create datepicker element
      if (this.props.type === 'datepicker') {
        subElements.push(datePicker, dateGrid);
      }
      else if (this.props.type === 'calendar') {
        subElements.push(dateGrid);
      }

      calendarOutput = React.createElement('div', {className: 'reactcal-container'}, subElements);
    }
    return calendarOutput;
  }
});

module.exports = Calendar;

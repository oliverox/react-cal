'use strict';

// Node modules
var React = require('react/addons');

/**
 * Datepicker sub component for React-cal
 *
 * Renders a datepicker label
 *
 */
var Datepicker = React.createClass({

  displayName: 'Datepicker',

  mixins: [React.addons.PureRenderMixin],

  getDefaultProps: function() {
    return {
      label: 'Select date'
    };
  },

  render: function() {
    return React.createElement('div', {className: 'datepicker'}, [
      React.createElement('span', {key: 'calendar-icon', className: 'icon calendar-icon'}),
      React.createElement('a', {href:'#', key: 'label', className: 'label', onClick: this.props.toggleCalendar}, this.props.label),
      React.createElement('span', {key: 'downchevron-icon', className: 'icon down-chevron-icon pointer', onClick: this.props.toggleCalendar})
      // React.createElement('span', {key: 'today-button', className: 'button today'}, React.createElement('img', {src: '../src/imgs/today.svg'}))
    ]);
  }
});

module.exports = Datepicker;

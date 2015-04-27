'use strict';

// Node modules
var React = require('react/addons');

/**
 * Weekday sub component for React-cal
 *
 * Renders a row of weekdays (to be used in month view)
 * types:
 *    0 - weekday starts with Sunday
 *    1 - weekday starts with Monday
 */
var Weekday = React.createClass({

  mixins: [React.addons.PureRenderMixin],

  render: function() {
    var weekdays = [];
    for (var i=0; i<this.props.days.length; i++) {
      weekdays.push(React.createElement('div', {className: 'day', key: i}, this.props.days[i]));
    }
    return React.createElement('div', {className: 'week-row small'}, weekdays);
  }
});

module.exports = Weekday;

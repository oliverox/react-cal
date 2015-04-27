'use strict';

// Node modules
var React = require('react/addons');

/**
 * Day sub component for React-cal
 *
 * Renders a day
 * types:
 *    0 - day is styled as faded out
 *    1 - day is styled as normal
 *    2 - day is styled as today
 */
var Day = React.createClass({

  mixins: [React.addons.PureRenderMixin],

  render: function() {
    var dateClassName = 'date';
    if (this.props.type === 0) {
      dateClassName += ' faded';
    }
    else if (this.props.type === 2) {
      dateClassName += ' today';
    }
    return React.createElement('div', {className: 'day date-container'}, [
      React.createElement('div', {key: 1, className: dateClassName }, this.props.value)
    ]);
  }
});

module.exports = Day;

'use strict';

// Node modules
var React = require('react/addons');

/**
 * MonthHeader sub component for React-cal
 *
 * Renders a header for month view
 *
 */
var Header = React.createClass({

  mixins: [React.addons.PureRenderMixin],

  getDefaultProps: function() {
    return {
      showNavigation: false
    }
  },

  render: function() {
    var leftChevron = React.createElement('div', {className: 'icon left-chevron'});
    var rightChevron = React.createElement('div', {className: 'icon right-chevron'});
    var elements = [];
    if (this.props.showNavigation) {
      elements = [
        React.createElement('div', {key: 1, className: 'control', onClick: this.props.goToPreviousMonth}, leftChevron),
        React.createElement('div', {key: 2, className: 'main'}, this.props.month + ' ' + this.props.year),
        React.createElement('div', {key: 3, className: 'control', onClick: this.props.goToNextMonth}, rightChevron)
      ];
    }
    else {
      elements = React.createElement('div', {key: 1, className: 'main'}, this.props.month + ' ' + this.props.year);
    }
    return React.createElement('div', {className: 'header'}, elements);
  }
});

module.exports = Header;

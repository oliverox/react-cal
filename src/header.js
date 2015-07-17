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

  displayName: 'Header',

  mixins: [React.addons.PureRenderMixin],

  getDefaultProps: function() {
    return {
      showNavigation: true
    };
  },

  render: function() {
    var month = this.props.currentMoment.format('MMMM');
    var year = this.props.currentMoment.format('YYYY');
    var leftChevron = React.createElement('div', {className: 'icon left-chevron-icon'});
    var rightChevron = React.createElement('div', {className: 'icon right-chevron-icon'});
    var elements = [];
    if (this.props.showNavigation) {
      elements = [
        React.createElement('div', {key: 'leftchevron-icon', className: 'control', onClick: this.props.goToPreviousMonth}, leftChevron),
        React.createElement('div', {key: 'monthyear', className: 'description'}, [
          React.createElement('span', {key: 'month', className: 'month'}, month + ' '),
          React.createElement('span', {key: 'year', className: 'year'}, year)
        ]),
        React.createElement('div', {key: 'rightchevron-icon', className: 'control', onClick: this.props.goToNextMonth}, rightChevron)
      ];
    }
    else {
      elements = React.createElement('div', {key: 'monthyear', className: 'description'}, [
        React.createElement('span', {key: 'month', className: 'month'}, month + ' '),
        React.createElement('span', {key: 'year', className: 'year'}, year)
      ]);
    }
    return React.createElement('div', {className: 'header'}, elements);
  }
});

module.exports = Header;

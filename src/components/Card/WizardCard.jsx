import React, { Component } from 'react';

class WizardCard extends Component {
  render() {
    return (
      <div className={"card"
      + (this.props.hidden ? " card-hidden" : "")
      + (this.props.calendar ? " card-calendar" : "")
      + (this.props.plain ? " card-plain" : "")
      + (this.props.wizard ? " card-wizard" : "")
      + (this.props.numberOfSteps === 2 && ' twoStep')}>
        <div className={"content"
        + (this.props.ctAllIcons ? " all-icons" : "")
        + (this.props.ctFullWidth ? " content-full-width" : "")
        + (this.props.ctTextCenter ? " text-center" : "")
        + (this.props.tableFullWidth ? " table-full-width" : "")}>
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default WizardCard;

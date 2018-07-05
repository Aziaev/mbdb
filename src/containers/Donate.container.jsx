import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import { connect } from 'react-redux'
import pubActions from "../actions/pubActions";
import DonatePage from "../views/Pages/DonatePage";

class Donate extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      valid: true,
      userId: null
    };
  }

  componentDidMount() {
    this.props.match.params.userId
      ? this.props.getUserById(this.props.match.params.userId)
      : this.props.fetchUsers();
  }

  render() {
    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
            <DonatePage
              {...this.props}
            />
          </Row>
        </Grid>
      </div>
    );
  }
}

const stateToProps = (state) => {
  return {
    auth: state.auth,
    dashboard: state.dashboard,
    pub: state.pub
  };
};

const dispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(pubActions.fetchUsers({ city: 'Кострома', size: '10', page: '1' })),
    getUserById: (userId) => dispatch(pubActions.getUserById(userId)),
  }
};

export default connect(stateToProps, dispatchToProps)(Donate)

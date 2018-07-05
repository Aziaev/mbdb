import React, { Component } from 'react';
import StepZilla from 'react-stepzilla';
import{
    Grid, Row, Col
} from 'react-bootstrap';

import Card from '../../../components/Card/Card.jsx';

import Step1 from './ArtistStep';
import Step2 from './ArtistStep.jsx';
import Step3 from './ArtistStep.jsx';

const steps = [
    { name: 'First Tab', component: <Step1 />},
    { name: 'Second Tab', component: <Step2 />},
    { name: 'Third Tab', component: <Step3 />}
];

class Wizard extends Component{
    render(){
        return (
            <div className="main-content">
                <Grid fluid>
                    <Row>
                        <Col md={8} mdOffset={2}>
                            <Card
                                wizard
                                id="wizardCard"
                                textCenter
                                title="Awesome Wizard"
                                category="Split a complicated flow in multiple steps"
                                content={
                                    <StepZilla
                                        steps={steps}
                                        stepsNavigation={false}
                                        nextButtonCls="btn btn-prev btn-info btn-fill pull-right btn-wd"
                                        backButtonCls="btn btn-next btn-default btn-fill pull-left btn-wd"
                                    />
                                }
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Wizard;

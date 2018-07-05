import React, {Component} from "react"
import {Col, Grid, Media, Row} from "react-bootstrap"
import constants from "../../constants"
import {promoBlock, promoIconDiv, styledP, whiteText} from "../../style"

class Promo extends Component {
  render() {
    let langCode = 0;
    let promoTitle = constants.PROMO_DESCRIPTION.title[langCode];
    let promoEndingText = constants.PROMO_ENDING.text[langCode];

    let mediaTitle01 = constants.PROMO_MEDIA_01.title[langCode];
    let mediaText01 = constants.PROMO_MEDIA_01.text[langCode];
    let mediaTitle01Icon = constants.PROMO_MEDIA_01.icon;

    let mediaTitle02 = constants.PROMO_MEDIA_02.title[langCode];
    let mediaText02 = constants.PROMO_MEDIA_02.text[langCode];
    let mediaTitle02Icon = constants.PROMO_MEDIA_02.icon;

    let mediaTitle03 = constants.PROMO_MEDIA_03.title[langCode];
    let mediaText03 = constants.PROMO_MEDIA_03.text[langCode];
    let mediaTitle03Icon = constants.PROMO_MEDIA_03.icon;

    let mediaTitle04 = constants.PROMO_MEDIA_04.title[langCode];
    let mediaText04 = constants.PROMO_MEDIA_04.text[langCode];
    let mediaTitle04Icon = constants.PROMO_MEDIA_04.icon;
    return (
      <Grid>
        <Row>
          <Col md={8} mdOffset={2}>
            <div className="header-text">
              <div style={promoBlock}>
                <h2>{constants.APP_NAME}</h2>
                <h4>{promoTitle}</h4>
              </div>
              <hr/>
            </div>
            <Media style={{marginTop: '0'}}>
              <h4 className='text-center' style={{paddingBottom: '20px'}}>О сервисе</h4>
              <Media.Left>
                <div className="icon" style={promoIconDiv}>
                  <i className={mediaTitle01Icon}></i>
                </div>
              </Media.Left>
              <Media.Body>
                <Media.Heading>{mediaTitle01}</Media.Heading>
                <p style={styledP}>{mediaText01}</p>
              </Media.Body>
            </Media>
            <Media>
              <Media.Left>
                <div className="icon" style={promoIconDiv}>
                  <i className={mediaTitle02Icon}></i>
                </div>
              </Media.Left>
              <Media.Body>
                <Media.Heading>{mediaTitle02}</Media.Heading>
                <p style={styledP}>{mediaText02}</p>
              </Media.Body>
            </Media>
            <Media>
              <Media.Left>
                <div className="icon" style={promoIconDiv}>
                  <i className={mediaTitle03Icon}></i>
                </div>
              </Media.Left>
              <Media.Body>
                <Media.Heading>{mediaTitle03}</Media.Heading>
                <p style={styledP}>{mediaText03}</p>
              </Media.Body>
            </Media>
            <Media>
              <Media.Left>
                <div className="icon" style={promoIconDiv}>
                  <i className={mediaTitle04Icon}></i>
                </div>
              </Media.Left>
              <Media.Body>
                <Media.Heading>{mediaTitle04}</Media.Heading>
                <p style={styledP}>{mediaText04}</p>
              </Media.Body>
            </Media>
            <div className="text-center" style={whiteText}>
              <h4>{promoEndingText}</h4>
              <hr/>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Promo;

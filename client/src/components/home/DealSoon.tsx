import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '@mui/material/Button';

import './Home.css';
import { Link } from 'react-router-dom';

export const DealSoon = () => {
  return (
    <Container
      className="deal-soon mb-deal-soon sm-deal-soon"
      data-aos="zoom-out"
    >
      <Row>
        <Col xl={12} xxl={12}>
          <div className="body-deal-soon md-body-deal sm-body-deal">
            <h3>Ưu đãi độc quyền sẽ sớm kết thúc!</h3>
            <p>
              Những người cực kỳ yêu thích hệ thống thân thiện với môi trường.
            </p>
            <div className="watch-soon mb-watch-soon sm-watch-soon">
              <div className="watch sm-watch">
                <Row>
                  <Col sm={3} md={3} xl={3} xxl={3}>
                    <div className="col-watch mb-col-watch sm-col-watch">
                      <b>29</b>
                      <span>Ngày</span>
                    </div>
                  </Col>
                  <Col sm={3} md={3} xl={3} xxl={3}>
                    <div className="col-watch mb-col-watch sm-col-watch">
                      <b>29</b>
                      <span>Ngày</span>
                    </div>
                  </Col>
                  <Col sm={3} md={3} xl={3} xxl={3}>
                    <div className="col-watch mb-col-watch sm-col-watch">
                      <b>29</b>
                      <span>Ngày</span>
                    </div>
                  </Col>
                  <Col sm={3} md={3} xl={3} xxl={3}>
                    <div className="mb-col-watch sm-col-watch">
                      <b>29</b>
                      <span>Ngày</span>
                    </div>
                  </Col>
                  <Link to={'/Shop'}>
                    <Button
                      className="btn-deal-soon md-btn-deal"
                      id="md-btn-deal"
                      variant="contained"
                    >
                      Mua Ngay
                    </Button>
                  </Link>
                </Row>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

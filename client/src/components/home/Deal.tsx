import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Deal = () => {
  return (
    <Container className="Deal mb-deal">
      <Row>
        <Col xl={8} xxl={8}>
          <Row>
            <Col xl={8} xxl={8}>
              <div className="body-deal mb-body-deal">
                <img
                  src="https://preview.colorlib.com/theme/karma/img/category/xc1.jpg.pagespeed.ic.XqvaEBoKy8.webp"
                  alt="Deal"
                />
                <p>Hiển thị ghì đó</p>
              </div>
            </Col>
            <Col xl={4} xxl={4}>
              <div className="body-deal">
                <img
                  src="https://preview.colorlib.com/theme/karma/img/category/xc2.jpg.pagespeed.ic.x6xPsd0yYD.webp"
                  alt="Deal"
                />
                <p>Hiển thị ghì đó</p>
              </div>
            </Col>

            <Col xl={4} xxl={4}>
              <div className="body-deal">
                <img
                  src="https://preview.colorlib.com/theme/karma/img/category/xc3.jpg.pagespeed.ic.pcQW7Dgp5A.webp"
                  alt="Deal"
                />
                <p>Hiển thị ghì đó</p>
              </div>
            </Col>
            <Col xl={8} xxl={8}>
              <div className="body-deal">
                <img
                  src="https://preview.colorlib.com/theme/karma/img/category/xc4.jpg.pagespeed.ic.wg-3xj3hdK.webp"
                  alt="Deal"
                />
                <p>Hiển thị ghì đó</p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xl={4} xxl={4}>
          <div className="body-deal mb-deal-other">
            <img
              style={{ width: '96%' }}
              src="https://preview.colorlib.com/theme/karma/img/category/xc5.jpg.pagespeed.ic.n5CZTy5QEq.webp"
              alt="Deal"
            />
            <p>Hiển thị ghì đó</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PaidIcon from '@mui/icons-material/Paid';

const service = [
  {
    id: 1,
    icon: <LocalShippingIcon className="icon-service-home" />,
    title: 'Content Clothes',
    content: 'Free Shipping on all order',
  },
  {
    id: 2,
    icon: <AutoModeIcon className="icon-service-home" />,
    title: 'Return Policy',
    content: 'Free Shipping on all order',
  },
  {
    id: 3,
    icon: <SupportAgentIcon className="icon-service-home" />,
    title: '24/7 Support',
    content: 'Free Shipping on all order',
    classBorder: '',
  },
];

export const ServiceHome = () => {
  return (
    <Container>
      <div className="serviceHome mb-service-home">
        <Container className="serviceHome-parents mb-service-home-parents">
          <Row>
            {service.map((step, index) => (
              <Col sm={12} xl={3} xxl={3}>
                <div
                  key={step.id}
                  className="body-service-home mb-body-service"
                >
                  <i>{step.icon}</i>
                  <b>{step.title}</b>
                  <p>{step.content}</p>
                </div>
              </Col>
            ))}
            <Col sm={12} xl={3} xxl={3}>
              <div className="body-service-home-last-one">
                <i>
                  <PaidIcon className="icon-service-home" />,
                </i>
                <b>Secure Payment</b>
                <p>Free Shipping on all order</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
};

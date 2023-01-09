import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export const CategoriesBlog = () => {
  return (
    <Container className="container-categories mb-blog-categories">
      <Row>
        <Col xl={4} xxl={4}>
          <div className="categories_post">
            <img
              src="https://preview.colorlib.com/theme/karma/img/blog/cat-post/cat-post-3.jpg"
              alt="categories_post"
            />
            <div className="categories_details">
              <div className="categories_text">
                <a href="#!">
                  <h5>Social Life</h5>
                </a>
                <div className="border_line"></div>
                <p>Enjoy your social life together</p>
              </div>
            </div>
          </div>
        </Col>
        <Col xl={4} xxl={4}>
          <div className="categories_post">
            <img
              src="https://preview.colorlib.com/theme/karma/img/blog/cat-post/cat-post-3.jpg"
              alt="categories_post"
            />
            <div className="categories_details">
              <div className="categories_text">
                <a href="#!">
                  <h5>Social Life</h5>
                </a>
                <div className="border_line"></div>
                <p>Enjoy your social life together</p>
              </div>
            </div>
          </div>
        </Col>
        <Col xl={4} xxl={4}>
          <div className="categories_post">
            <img
              src="https://preview.colorlib.com/theme/karma/img/blog/cat-post/cat-post-3.jpg"
              alt="categories_post"
            />
            <div className="categories_details">
              <div className="categories_text">
                <a href="#!">
                  <h5>Social Life</h5>
                </a>
                <div className="border_line"></div>
                <p>Enjoy your social life together</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

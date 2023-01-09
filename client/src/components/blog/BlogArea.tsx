import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Pagination from '@mui/material/Pagination';

import { BlogLeft } from './BlogLeft';
import { BlogRight } from './BlogRight';
export const BlogArea = () => {
  return (
    <Container className="container-blog-area">
      <Row>
        <Col xl={8} xxl={8}>
          <div className="blog_left_sidebar mb-blog-left">
            <Row>
              <BlogLeft />
              <BlogLeft />
              <BlogLeft />
              <BlogLeft />
            </Row>
          </div>
          <div className="pagination mb-pagination">
            <Pagination count={10} color="primary" />
          </div>
        </Col>
        <Col xl={4} xxl={4}>
          <BlogRight />
        </Col>
      </Row>
    </Container>
  );
};

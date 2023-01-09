import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

import Photo from '../../assets/images/blog/photo.jpg';

import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';

import FacebookIcon from '@mui/icons-material/Facebook';

import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

export const BlogRight = () => {
  return (
    <>
      <div className="blog_right_sidebar">
        <aside className="single_sidebar_widget search_widget">
          <div className="input-group">
            <TextField id="search-basic" label="Tìm kiếm" variant="standard" />
          </div>
          <div className="br"></div>
        </aside>
        <aside className="single_sidebar_widget author_widget">
          <img src={Photo} alt="Photoo" />
          <h4>Nguyen Van Son</h4>
          <p>Intern Developer Web</p>
          <div className="social_icon">
            <a href="#!">
              <FacebookIcon />
            </a>
            <a href="#!">
              <YouTubeIcon />
            </a>
            <a href="#!">
              <TwitterIcon />
            </a>
            <a href="#!">
              <GitHubIcon />
            </a>
          </div>
          <p>
            Boot camps have its supporters andit sdetractors. Some people do not
            understand why you should have to spend money on boot camp when you
            can get. Boot camps have itssuppor ters andits detractors.
          </p>
          <div className="br"></div>
        </aside>
        <aside className="single_sidebar_widget popular_post_widget">
          <Button variant="contained" className="popular">
            Popular Posts
          </Button>
          <List
            sx={{
              width: '100%',
              maxWidth: 360,
              bgcolor: 'background.paper',
            }}
          >
            <ListItem>
              <ListItemAvatar>
                <img src={Photo} alt="Photoo" />
              </ListItemAvatar>
              <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <img src={Photo} alt="Photoo" />
              </ListItemAvatar>
              <ListItemText primary="Work" secondary="Jan 7, 2014" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <img src={Photo} alt="Photoo" />
              </ListItemAvatar>
              <ListItemText primary="Vacation" secondary="July 20, 2014" />
            </ListItem>
          </List>
          <div className="br"></div>
        </aside>
        <aside className="single_sidebar_widget ads_widget">
          <a href="#!">
            <img className="img-fluid" src={Photo} alt="phoot" />
          </a>
          <div className="br"></div>
        </aside>

        <aside className="single_sidebar_widget post_category_widget">
          <Button variant="contained" className="category">
            Category
          </Button>
          <ListGroup as="ol" numbered>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Subheading</div>
                Cras justo odio
              </div>
              <Badge bg="primary" pill>
                14
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Subheading</div>
                Cras justo odio
              </div>
              <Badge bg="primary" pill>
                14
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Subheading</div>
                Cras justo odio
              </div>
              <Badge bg="primary" pill>
                14
              </Badge>
            </ListGroup.Item>
          </ListGroup>
          <div className="br"></div>
        </aside>
        <aside className="single-sidebar-widget newsletter_widget">
          <Button variant="contained" className="widget_title">
            Newsletter
          </Button>
          <p>
            Here, I focus on a range of items and features that we use in life
            without giving them a second thought.
          </p>
          <InputGroup>
            <InputGroup.Text id="btnGroupAddon2">
              <EmailIcon />
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Enter Email"
              aria-label="Input group example"
              aria-describedby="btnGroupAddon2"
            />
            <InputGroup.Text id="btnGroupAddon2" className="input">
              <a href="#!">Submit</a>
            </InputGroup.Text>
          </InputGroup>
          <p className="text-bottom">You can unsubscribe at any time</p>
        </aside>
        <aside className="single-sidebar-widget tag_cloud_widget">
          <Button variant="contained" className="tag">
            Tag Clouds
          </Button>
          <ul className="list">
            <li>
              <a href="#!">Technology</a>
            </li>
            <li>
              <a href="#!">Technology</a>
            </li>
            <li>
              <a href="#!">Technology</a>
            </li>
            <li>
              <a href="#!">Technology</a>
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
};

import Col from 'react-bootstrap/Col';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

export const BlogLeft = () => {
  return (
    <>
      <>
        <Col xl={2} xxl={2}>
          <div className="blog_info mb-blog-info">
            <div className="post_tag mb-post_tag">
              <a href="#!">Food,</a>
              <a href="#!" className="active">
                Technology,
              </a>
              <a href="#!">Politics,</a>
              <a href="#!">Lifestyle</a>
            </div>
            <ul className="blog_meta mb-blog_meta">
              <div className="right">
                <li>
                  <a href="#!">Mark wiens</a>
                  <i>
                    <PermIdentityIcon />
                  </i>
                </li>
                <li>
                  <a href="#!">Mark wiens</a>
                  <i>
                    <CalendarMonthIcon />
                  </i>
                </li>
                <li>
                  <a href="#!">Mark wiens</a>
                  <i>
                    <RemoveRedEyeIcon />
                  </i>
                </li>
                <li>
                  <a href="#!">Mark wiens</a>
                  <i>
                    <ContactSupportIcon />
                  </i>
                </li>
              </div>
            </ul>
          </div>
        </Col>
        <Col xl={10} xxl={10}>
          <div className="blog_post mb_post">
            <img
              src="https://preview.colorlib.com/theme/karma/img/blog/main-blog/m-blog-1.jpg"
              alt="Img"
            />
            <div className="blog_details mb_post_details">
              <a href="#!">
                <h2>Astronomy Binoculars A Great Alternative</h2>
                <p>
                  MCSE boot camps have its supporters and its detractors. Some
                  people do not understand why you should have to spend money on
                  boot camp when you can get the MCSE study materials yourself
                  at a fraction.
                </p>
                <a href="#!" className="white_bg_btn">
                  View More
                </a>
              </a>
            </div>
          </div>
        </Col>
      </>
    </>
  );
};

import '../components/components.css';
import { Link } from 'react-router-dom';

import './components.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Fab from '@mui/material/Fab';

import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import FitbitIcon from '@mui/icons-material/Fitbit';

interface MyProps {
  id: Number;
  name: String;
  price: String;
  oldprice: String;
  imgPath: String;
}

export default function CardProduct(props: MyProps) {
  const IconPrd = [
    {
      id: 1,
      title: 'Thêm Vào Giỏ',
      icon: <ShoppingBagIcon className="icon-prd-card" />,
    },
    {
      id: 2,
      title: 'Yêu Thích',
      icon: <FavoriteBorderIcon className="icon-prd-card" />,
    },
    {
      id: 1,
      title: 'So Sánh',
      icon: <AutorenewIcon className="icon-prd-card" />,
    },
    {
      id: 1,
      title: 'Xem Chi Tiết',
      icon: <FitbitIcon className="icon-prd-card" />,
    },
  ];
  return (
    <Card sx={{ maxWidth: 260, marginBottom: '10px' }} className="mb-card">
      <CardActionArea>
        <CardMedia
          className="card-image"
          component="img"
          height="140"
          image={`${props.imgPath}`}
          alt="green iguana"
        />
        <CardContent>
          <b>{props.name}</b>
          <p>{props.price}</p>
          <del>{props.oldprice}</del>
        </CardContent>
      </CardActionArea>
      {IconPrd.map((icon) => (
        <div className="link-product md-link-product" key={icon.id}>
          <Tooltip title={icon.title}>
            <Link to={'/Shop'}>
              <Button className="btn-icon-prd">
                <Fab
                  className="icon-prd"
                  size="small"
                  color="secondary"
                  aria-label="add"
                >
                  {icon.icon}
                </Fab>
              </Button>
            </Link>
          </Tooltip>
        </div>
      ))}
    </Card>
  );
}

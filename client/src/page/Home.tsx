import Banner from '../components/home/Banner';
import { Deal } from '../components/home/Deal';
import ProductHome from '../components/home/ProductHome';
import { ServiceHome } from '../components/home/ServiceHome';
import { TitleHome } from '../components/home/TitleHome';
import BoltIcon from '@mui/icons-material/Bolt';
import { DealSoon } from '../components/home/DealSoon';
import { BrandArea } from '../components/home/BrandArea';

import '../components/home/ResponsiveHome.css';

import './Page.css';

const titleHome = {
  id: 1,
  title: 'Hot Deal',
  icon: <BoltIcon />,
};

const titleHome1 = {
  id: 1,
  title: 'Hot Deal 1',
  icon: <BoltIcon />,
};

export default function Home() {
  return (
    <div className="">
      <Banner />
      <div className="container padding-home-page mb-padding-home-page">
        <ServiceHome />
        <Deal />
        <TitleHome data={titleHome} />
        <ProductHome />
        <TitleHome data={titleHome1} />
        <ProductHome />
        <DealSoon />
        <BrandArea />
      </div>
      {/* <HeaderHome /> */}
      {/* <BodyHome /> */}
      {/* <Seketon/> */}
    </div>
  );
}

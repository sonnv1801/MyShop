import CardProduct from '../shop/CardProduct';
import GroupedSelectCate from './GroupedSelectCate';
import ListCateOption from './ListCateOption';
import ListCategory from './ListCateroty';
import "../components.css"
import SliderProduct from '../SliderProduct';
import Pagination from './Pagination';

export default function BodyShop() {
    return (
        <>
            <div className='container body_shop'>
                <div className='row' style={{ paddingTop: '40px' }}>
                    <div className='ff col-lg-3 col-ms-4 col-xs'>
                        <ListCategory />
                        <ListCateOption />

                        <div>
                            <p></p>
                            <img src="https://bizweb.dktcdn.net/100/091/133/themes/877464/assets/banner-qc-cl.jpg?1663743943599" alt="" style={{ width: '100%'}} />
                        </div>

                    </div>

                    <div className='ff2 col-lg-9 col-ms-8'>
                        <div className='' style={{ width: '100%', background: '#90C43C', padding: '2px' }}>
                            <GroupedSelectCate />
                        </div>

                        {/* product */}
                        <div className='col'>
                            <div className='row' >
                                <div className='col'>
                                    <CardProduct />
                                </div>

                                <div className='col'>
                                    <CardProduct />
                                </div>

                                <div className='col'>
                                    <CardProduct />
                                </div>

                                <div className='col'>
                                    <CardProduct />
                                </div>

                                <div className='col'>
                                    <CardProduct />
                                </div>

                                <div className='col'>
                                    <CardProduct />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Pagination />

                <div style={{ textAlign: 'center', marginTop: '140px', color: '#777777' }}>
                    <h2 style={{ color: '#000' }}>Deals of the Week</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna aliqua. </p>
                </div>

                {/* DEALS_OF_WEEK */}
                <div className='Deals_of_Week'>
                    <img className='img_deals_replace' src='https://preview.colorlib.com/theme/karma/img/category/xc5.jpg.pagespeed.ic.n5CZTy5QEq.webp' alt='deals' />
                    <div className='Deals_of_Week_items'>
                        <ul>
                            <img src='https://preview.colorlib.com/theme/karma/img/xr1.jpg.pagespeed.ic.5LQf1TrLF3.webp' alt='' />

                            <li>
                                <p>
                                    BLACK LACE HEELS
                                    <br />
                                    $189.00 $210.00
                                </p>
                            </li>
                        </ul>

                        <ul>
                            <img src='https://preview.colorlib.com/theme/karma/img/xr3.jpg.pagespeed.ic.2cvUC9oca_.webp' alt='' />

                            <li>
                                <p>

                                    BLACK LACE HEELS
                                    <br />
                                    BLACK LACE HEELS
                                </p>
                            </li>
                        </ul>

                        <ul>
                            <img src='https://preview.colorlib.com/theme/karma/img/xr6.jpg.pagespeed.ic.YU-BO8xHf_.webp' alt='' />

                            <li>
                                <p>
                                    BLACK LACE HEELS
                                    <br />
                                    BLACK LACE HEELS
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className='Deals_of_Week_items'>
                        <ul>
                            <img src='https://preview.colorlib.com/theme/karma/img/xr9.jpg.pagespeed.ic.f9IbStkaTE.webp' alt='' />

                            <li>
                                <p>
                                    BLACK LACE HEELS
                                    <br />
                                    BLACK LACE HEELS
                                </p>
                            </li>
                        </ul>

                        <ul>
                            <img src='https://preview.colorlib.com/theme/karma/img/xr1.jpg.pagespeed.ic.5LQf1TrLF3.webp' alt='' />

                            <li>
                                <p>
                                    BLACK LACE HEELS
                                    <br />
                                    BLACK LACE HEELS
                                </p>
                            </li>
                        </ul>

                        <ul>
                            <img src='https://preview.colorlib.com/theme/karma/img/xr1.jpg.pagespeed.ic.5LQf1TrLF3.webp' alt='' />

                            <li>
                                <p>
                                    BLACK LACE HEELS
                                    <br />
                                    BLACK LACE HEELS
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className='Deals_of_Week_items'>
                        <ul>
                            <img src='https://preview.colorlib.com/theme/karma/img/xr1.jpg.pagespeed.ic.5LQf1TrLF3.webp' alt='' />

                            <li>
                                <p>
                                    BLACK LACE HEELS
                                    <br />
                                    BLACK LACE HEELS
                                </p>
                            </li>
                        </ul>

                        <ul>
                            <img src='https://preview.colorlib.com/theme/karma/img/xr1.jpg.pagespeed.ic.5LQf1TrLF3.webp' alt='' />

                            <li>
                                <p>
                                    BLACK LACE HEELS
                                    <br />
                                    BLACK LACE HEELS
                                </p>
                            </li>
                        </ul>

                        <ul>
                            <img src='https://preview.colorlib.com/theme/karma/img/xr1.jpg.pagespeed.ic.5LQf1TrLF3.webp' alt='' />

                            <li>
                                <p>
                                    BLACK LACE HEELS
                                    <br />
                                    BLACK LACE HEELS
                                </p>
                            </li>
                        </ul>
                    </div>
                    <img className='img_deals' src='https://preview.colorlib.com/theme/karma/img/category/xc5.jpg.pagespeed.ic.n5CZTy5QEq.webp' alt='deals' />
                </div>
            </div>
        </>
    )
}

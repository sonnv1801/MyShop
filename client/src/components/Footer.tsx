import './components.css';

export default function Footer() {

    return (
        <>
            <div className="wrap_footer_app">
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <p className='title_item_footer'>About Us</p>
                            <p className='content_item_footer'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                        </div>

                        <div className='col-lg-4 col-md-6 col-sm-6'>
                            <p className='title_item_footer'>Newsletter</p>

                            <p className='content_item_footer'>Stay update with our latest</p>
                            <input className='input_footer'/>
                        </div>

                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div>
                                <h6 className='title_item_footer mb-20'>Instragram Feed</h6>
                            </div>

                            <div className='group_img_footer'>
                                <p><img src='https://preview.colorlib.com/theme/karma/img/xi8.jpg.pagespeed.ic.k_7KLaTiSo.webp' alt='' /></p>
                                <p><img src='https://preview.colorlib.com/theme/karma/img/xi2.jpg.pagespeed.ic.3857ToO-Y0.webp' alt='' /></p>
                                <p><img src='https://preview.colorlib.com/theme/karma/img/xi1.jpg.pagespeed.ic.jfLZK-H-XF.webp' alt='' /></p>
                                <p><img src='https://preview.colorlib.com/theme/karma/img/xi3.jpg.pagespeed.ic.Xa_CKOsVWT.webp' alt='' /></p>
                                <p><img src='https://preview.colorlib.com/theme/karma/img/xi4.jpg.pagespeed.ic.RlyWl7MZsa.webp' alt='' /></p>
                                <p><img src='https://preview.colorlib.com/theme/karma/img/xi7.jpg.pagespeed.ic.tCrquJ1b2e.webp' alt='' /></p>
                                <p><img src='https://preview.colorlib.com/theme/karma/img/xi5.jpg.pagespeed.ic.EEPJ2CxYEb.webp' alt='' /></p>
                                <p><img src='https://preview.colorlib.com/theme/karma/img/xi6.jpg.pagespeed.ic.eP8-siz_Gr.webp' alt='' /></p>
                            </div>
                        </div>

                        <div className='col-lg-2 col-md-6 col-sm-6'>
                            <div>
                                <h6 className='title_item_footer'>Follow Us</h6>
                            </div>
                        </div>
                    </div>

                    <p style={{ textAlign: 'center', marginTop:'70px', color: '#636363' }}>Copyright ©2022 All rights reserved | This template is made with  by Colorlib</p>
                </div>

            </div>
        </>
    );
}
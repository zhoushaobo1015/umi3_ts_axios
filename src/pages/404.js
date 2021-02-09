import React, { Component } from 'react';
import { Link } from 'umi';
import './404.scss';
// import img404 from '../assets/images/404/404.png';

class NotFond404 extends Component {
    render(){
        return(
            <div className="NotFond404" id="NotFond404">
                <div className="not_fond_404_wrap">
                    <div className="Img">
                        {/*<img src={img404} alt="" />*/}
                    </div>
                    <div className="btn">
                        <p>{'404'}</p>
                        <a href="javascript:window.history.go(-1);">{'返回'}</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFond404;
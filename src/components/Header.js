import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const Icon = styled.svg`
    width: 800;
    height: 800;
`;

const Me = styled.img`
    width: 30%;
    height: auto;
`;

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
        <Icon viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="800" fill="white"/>
            <path d="M0 0H800V800H0V0Z" fill="#F0DB4F"/>
            <path d="M163.724 731H275.539C387.889 731 467.069 656.635 467.069 549.1C467.069 441.565 387.354 367.2 275.539 367.2H163.724V731ZM238.624 665.195V433.005H271.794C352.579 433.005 389.494 481.155 389.494 549.1C389.494 617.045 352.579 665.195 271.794 665.195H238.624Z" fill="#323330"/>
            <path d="M613.491 735.815C684.646 735.815 737.611 698.9 737.611 631.49C737.611 568.895 701.766 541.075 638.101 513.79L619.376 505.765C587.276 491.855 573.366 482.76 573.366 460.29C573.366 442.1 587.276 428.19 609.211 428.19C630.611 428.19 644.521 437.285 657.361 460.29L715.676 422.84C691.066 379.505 656.826 362.92 609.211 362.92C542.336 362.92 499.536 405.72 499.536 461.895C499.536 522.885 535.381 551.775 589.416 574.78L608.141 582.805C642.381 597.785 662.711 606.88 662.711 632.56C662.711 653.96 642.916 669.475 611.886 669.475C574.971 669.475 554.106 650.215 538.056 624L477.066 659.31C499.001 702.645 543.941 735.815 613.491 735.815Z" fill="#323330"/>
        </Icon>
        </div>
        <div className="content">
            <div className="inner">
                <Me className="me" src="https://res.cloudinary.com/dstfrgxx1/image/upload/v1560278908/15349737_10209658328993790_7078757669381610747_n_h8yxk2.jpg"/>
                <h1>David L. Starr</h1>
                <p>Christian — Web Developer — Musician — Vigilante</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('portfolio')}}>Portfolio</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header

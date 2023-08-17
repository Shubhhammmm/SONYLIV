import { Link } from "react-router-dom";
import SubscriptionCard from "../../components/subscription/SubscriptionCard";
import "./Subscribe.css";
const Subscribe = () => {
  return (
    <>
      <div>
        {/* header with logo */}
        <div className="subscribe-header">
          <Link to="/" className="normal-link">
            <img src="https://resources.sonyliv.com/image/fetch/w_40,c_fill,fl_lossy,f_auto,q_auto:eco,e_contrast:30,e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/sonyliv_new_revised_header_logo.png"></img>
          </Link>
        </div>
        <div className="subscribe-title-header">
          <div>
            <button className="back-arrow">
              <Link to="/" className="normal-link">
                <img
                  src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cpath fill='%23FFF' d='M0 0h24v24H0z' opacity='.01'/%3e%3cpath stroke='%23FFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M16 20l-8-8 8-8'/%3e%3c/g%3e%3c/svg%3e"
                  className="back_arrow_img"
                  alt="Back"
                />
              </Link>
            </button>
          </div>
          <div>Select your plan</div>
          <div>
            <Link to="/signin" className="normal-link fs-12px">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAwCAMAAACyjAPtAAABR1BMVEX///////////////////////////9HcEz///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9ISMv2AAAAbXRSTlOAexJPIzoEAH9+Xhx9AQJ6BnwpDXNCUQMIWkogC2d2ExhFJXIKVxEqNyInUEAMMBZJBU0UCTwdQW90VTtfJgdTXSRsLlJrF3gQdy1GIVkvQ0dMDnVWYGVqSzZ5ZGkrblQ1Y0Q0FR9iSHEPXD05zciJXwAAAidJREFUSMet1tVzG0EMwOGfISet2Q07nDjQUMPMnDIzM/3/z324zeWceNfptHrxyPMdzK60OuRvgn/V+exy287jb2+2rqDz00OoUaPkKt2N9NQrFBta3PTr5FBkAdVPPr21F8eApj16LoYVQE87nHo+FLnlbJC8uRJe1OrUDxTQliMRESltA1Bsd+lVAK7bbHbFAKQdOglgOqN8FEBbHboLgF9R3gxgJhx6FIBr538UAe106NsArEd5N4Bpc+h5AB2O8nEA/ejQ+V4AXbJp+zMDMOhawZQC5u1IiJ8DUA5cuj/c8sRYUhZ2e8K9vO+uk221FZI4q5Ni1a2r301tDcbX83J9H53W1DeL/t4ZOYz1Tm6/UV8Gv49RBQPvRq7Q88FmpbNn4+B9c+OeL5x0pc+iq6/k08nJw1ztkvSm0oX6+nMGLjQxKKv7dXTQai5R67/2XdSlDM7Q42ytXnhqb6ym5vSxv+XduM5n1D51LzXZdBbrMzs5Wy6JvphetHa4/8KSVZsSIX89G+l+e4PxOkf2jw/h2wxEelgBfZmte8KXNhSg3G31jXrFeR4d4bk7YPWcAppyzo8vACSCULcA6Il73GSMPfGwL2LWPMNpEEBviSDyAoC7Hh2UAe0RQWRAAR76Jl9GgV4RRCYMYPI+nTKAFgSRnwo88k7VewowJYi0KegTr54GMIEgklVV59bYDWpBqYTrvXSwNthgwDfP3Bkr/IevAk/8AZu9TqNr8Ub9AAAAAElFTkSuQmCC"
                className="subscribe-signin-icon"
                alt="sign"
              />
              Sign In
            </Link>
          </div>
        </div>
        {/* sub cards */}
        <div className="subscription-cards-list">
          <div>
            <SubscriptionCard
              title="Mobile Only"
              subTitle="Exclusive Originals & International Series"
              amount="599"
              duration="12 Months"
              imageUrl="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,q_auto:low/e_brightness:10/https://origin-staticv2.sonyliv.com/plan/SubscriptionCardsMaharaniS2MobilePack.jpg"
            />
            <button className="subscribe-btn">Proceed</button>
          </div>
          <SubscriptionCard
            title="LIV Premium"
            subTitle="Exclusive Originals & International Series"
            amount="999"
            duration="12 Months"
            imageUrl="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,q_auto:low/e_brightness:10/https://origin-staticv2.sonyliv.com/plan/SubscriptionCardsMaharaniS2LIVPremiumPack.jpg"
          />
        </div>
      </div>
    </>
  );
};
export default Subscribe;

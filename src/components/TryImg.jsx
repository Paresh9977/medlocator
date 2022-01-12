import React from 'react'
import './TryImgCss.css';

const TryImg = () => {
    return (
        <div>
            <div className="image">
                <img className="image__img" src="https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1641187637/lcfd1eufwbtituwyswpi.jpg" alt="Bricks" /><br />
                <img className="image__img" src="https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1641187637/lcfd1eufwbtituwyswpi.jpg" alt="Bricks" /><br />
                <img className="image__img" src="https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1641187637/lcfd1eufwbtituwyswpi.jpg" alt="Bricks" />
                <div className="image__overlay image__overlay--primary">
                    <div className="image__title"><button>Buy Now</button></div>
                    <p className="image__description">
                        Here we have a brick wall.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TryImg

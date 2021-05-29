import React from 'react';
import './Landing.css';
import background from '../background.jpg';

function Landing (props){

    return(
        <div className = 'landingContainer' id = 'landing'>
            <div className = 'landingContent'>
                <div className = 'title'>NFTrees</div>
                <p className = 'information'>
                    The first NFT-based carbon credit platform.
                    <br></br>
                    Bringing verifiable carbon capture to the cryptocurrency space.
                    <br></br>
                    Displace your protocol's carbon emmissions with NFTrees.  

                </p>
                <p className = 'comingSoon'>
                    coming soon
                </p>
            </div>
        </div>
    );
}

export default Landing;
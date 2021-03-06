import React from 'react';
import './Landing.css';
import background from '../background.jpg';
import { FaDiscord } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

function Landing (props){

    return(
        <div className = 'landingContainer' id = 'landing'>
            <div className = 'landingContent'>
                <div className = 'links'>
                    <a className = 'link' href = 'https://twitter.com/NFTrees_' target = '_blank'><FaTwitter size={30} fill = {'rgb(199, 199, 199)'} className = 'icon'/></a>
                    <a className = 'link' href = 'https://discord.gg/asZ6HNEF' target = '_blank'><FaDiscord size={30} fill = {'rgb(199, 199, 199)'} className = 'icon'/></a>
                </div>
                <div className = 'spacer'/>
                <div className = 'title'>NFTrees</div>
                <div className = 'underlineContainer'>
                    <div className = 'underline'></div>
                </div>
                <p className = 'information'>
                    The first NFT-based carbon capture platform.
                    <br></br>
                    Bringing verifiable carbon credits to the cryptocurrency space.
                    <br></br>
                    Displace your carbon emmissions with NFTrees.  

                </p>

                <p className = 'comingSoon'>
                        coming soon
                </p>

            </div>
        </div>
    );
}

export default Landing;
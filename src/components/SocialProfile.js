import React, { Component } from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

const SocialProfile = (props) => {

    const { name, link, image } = props.socialProfile;
    return (
        <div style={{ display: 'inline-block' }}>
            <a href={link}><img src={image} alt={name} style={{ width: 40, height: 40, margin: 10 }} /></a>
        </div>
    )

}

const SocialProfiles = (props) => (<div>
    <h4>Connect with me!</h4>
    <div>
        {SOCIAL_PROFILES.map((profile, index) => {
            return (
                <SocialProfile key={index} socialProfile={profile} />
            );
        })}
    </div>
</div>)



export default SocialProfiles;
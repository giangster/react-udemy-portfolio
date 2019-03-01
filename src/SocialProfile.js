import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';

class SocialProfile extends Component {
    render() {
        const { name, link, image } = this.props.socialProfile;
        return (
            <div style={{ display: 'inline-block' }}>
                <a href={link}><img src={image} alt={name} style={{ width: 40, height: 40, margin: 10 }} /></a>
            </div>
        )
    }
}

class SocialProfiles extends Component {
    render() {
        return (
            <div>
                <h4>Connect with me!</h4>
                <div>
                    {SOCIAL_PROFILES.map((profile, index) => {
                        return (
                            <SocialProfile key={index} socialProfile={profile} />
                        );
                    })}
                </div>
            </div>
        )
    }
}

export default SocialProfiles;
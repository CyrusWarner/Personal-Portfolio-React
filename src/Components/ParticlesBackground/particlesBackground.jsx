import React from 'react';
import particlesBackgroundConfig from '../ParticlesBackgroundConfig/particlesBackgroundConfig';
import Particles from "react-particles-js"

const ParticleBackground = () => {
    return (
        <Particles params={particlesBackgroundConfig}></Particles>
    )
}

export default ParticleBackground


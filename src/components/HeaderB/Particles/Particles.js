import React, { Component } from 'react'
import Particles from "react-particles-js";

const breakpoints = {
    bigDesktop: 2000,
    desktop: 1040,
    tablet: 840,
    mobile: 540
};
var particleOpt;


if (window.innerWidth > breakpoints.bigDesktop) {
    particleOpt = {
        particles: {
            number: {
                value: 55
            },
            size: {
                value: 3
            }
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true
                }
            }
        },
        polygon: {
            draw: {
                stroke: {
                    color: "#f1c40f"
                }
            }
        }
    };
} else if (window.innerWidth > breakpoints.desktop) {
    particleOpt = {
        particles: {
            number: {
                value: 30
            },
            size: {
                value: 3
            }
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true
                }
            }
        },
        polygon: {
            draw: {
                stroke: {
                    color: "#f1c40f"
                }
            }
        }
    };
} else if (window.innerWidth > breakpoints.tablet) {
    particleOpt = {
        particles: {
            number: {
                value: 15
            },
            size: {
                value: 3
            }
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true
                }
            }
        },
        polygon: {
            draw: {
                stroke: {
                    color: "#f1c40f"
                }
            }
        }
    };
} else  {
    particleOpt = { particles: { number: { value: 8 }, size: { value: 3 } }, interactivity: { events: { onhover: { enable: true } } }, polygon: { draw: { stroke: { color: "#f1c40f" } } } };
}


export default class ParticlesComponent extends Component {
  render() {
    return (
      <div>
            <Particles params={particleOpt} width="100vw" height="100vh" />
      </div>
    )
  }
}

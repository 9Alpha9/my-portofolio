/* eslint-disable react/prop-types */
import React from "react";
import { TweenLite, Power4 } from "gsap";
import "./App.css";

export default class SmoothScroll extends React.Component {
    state = {
        height: window.innerHeight,
    };

    ro = new ResizeObserver((elements) => {
        for (let elem of elements) {
            const crx = elem.contentRect;
            console.log(crx);
            this.setState({
                height: crx.height,
            });
        }
    });

    componentDidMount() {
        window.addEventListener("scroll", this.onScroll);
        this.ro.observe(this.CrvaVwePrt);
    }

    onScroll = () => {
        TweenLite.to(this.CrvaVwePrt, 1.1, {
            y: -window.pageYOffset,
            // pin: true,
            // pinSpacing: false,
            // smooth: 1,
            ease: Power4.easeOut,
            smoothTouch: 0.1,
        });
    };

    render() {
        return (
            <>
                <div
                    className="CrvaVwePrt"
                    ref={(ref) => (this.CrvaVwePrt = ref)}
                >
                    {this.props.children}
                </div>
                <div
                    ref={(ref) => (this.fake = ref)}
                    style={{
                        height: this.state.height,
                    }}
                />
            </>
        );
    }
}

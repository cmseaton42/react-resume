import React from "react";
import ReactDOM from "react-dom";
import "../style/vendor/animate/animate.min.scss";
import "../style/style.scss";

import Navbar from "./components/navbar";
import Cover from "./components/cover";
import DetailWIcon from "./components/detail-w-icon";
import SkillDetail from "./components/skills";
import Experience from "./components/experience";
import Profile from "./components/profile";
import Stats from "./components/stats";
import Contact from "./components/contact";
import Footer from "./components/footer";

const App = () => {
    return <div>
            <Navbar />
            <Cover />
            <div className="d-flex flex-row flex-wrap justify-content-between w-100">
                <DetailWIcon icon={"envelope"} caption={"cmseaton42@gmail.com"} animation={"slideInLeft"} />
                <DetailWIcon icon={"phone"} caption={"1 (931) 446-6573"} animation={"slideInUp"} />
                <DetailWIcon icon={"map-marker"} caption={"Evansville, IN"} animation={"slideInRight"} />
            </div>
            <hr />
            <Profile />
            <hr />
            <SkillDetail className="something" />
            <hr />
            <Stats />
            <hr />
            <Experience />
            <hr />
            <Contact />
            <hr />
            <Footer />
            <hr />
            <div className="text-center">
                <p style={{ color: "grey" }}>
                    The code for this site can be found on <a className="github-link" href="https://github.com/cmseaton42/react-resume">
                        <span className="github-link">
                            GitHub
                        </span>
                    </a>
                </p>
            </div>
        </div>;
};

// Preload and then mount App
window.addEventListener("load", () => {
    let preloader = document.getElementById("pre-loader");
    let appRoot = document.getElementById("root");

    let preload = setTimeout(() => {
        preloader.classList.add("animated", "fadeOut");

        let imageLoad = setTimeout(() => {
            preloader.style.display = "none";
            ReactDOM.render(<App />, appRoot);
        }, 650);
    }, 1500);
});

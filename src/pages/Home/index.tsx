import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import Accordion from "../../components/FAQ/Accordion";
import SpeakerCard from "../../components/Speaker/SpeakerCard.js";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const Timeliner = lazy(() => import("../../components/Timeliner"));

const Home = () => {
    return (
        <Container>
            <ScrollToTop />
            <ContentBlock
                type="right"
                title={IntroContent.title}
                content={IntroContent.text}
                button={IntroContent.button}
                icon="developer.svg"
                id="intro"
            />
            <ContentBlock
                type="left"
                title={AboutContent.title}
                content={AboutContent.text}
                section={AboutContent.section}
                icon="graphs.svg"
                id="about"
            />
            <ContentBlock
                type="right"
                title={MissionContent.title}
                content={MissionContent.text}
                icon="product-launch.svg"
                id="speakers"
            />
            {/* <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="timeline"
      /> */}
            <SpeakerCard />
            <Timeliner />
            <Accordion />
            <Contact
                title={ContactContent.title}
                content={ContactContent.text}
                id="register"
            />
        </Container>
    );
};

export default Home;

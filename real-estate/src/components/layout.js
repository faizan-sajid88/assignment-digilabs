import BottemNavigation from "./bottemNavigation";
import Footer from "./footer";
// import Hamburger from "./hamburger";
import HomePost from "./homePost";
import JoinSection from "./joinSection";
import Navbar from "./navbar";
import Opener from "./opener";
// import Post from "./post";
import Specs from "./specs";
import Testimonials from "./testimonials";
import TourSection from "./tourSection";

export default function Layout(){

    return(
        <div>
            <Navbar />
            <Opener />
            <TourSection />
            <Specs />
            <HomePost />
            <Testimonials />
            <JoinSection />
            <BottemNavigation />
            <Footer />
        </div>
    )
}
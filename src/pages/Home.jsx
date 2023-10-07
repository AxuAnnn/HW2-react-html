import header from "../components/header"
import footer from "../components/footer";
import content from "../components/content";
import CourseElement from "../json/CourseElement.json";
import BannerAndDesc from "../json/BannerAndDesc.json";

function Home() {
    return (
        <div>
            <header />
            <content CourseElement={CourseElement} BannerAndDesc={BannerAndDesc} />
            <footer />
        </div>
    );
}

export default Home;
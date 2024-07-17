import About from "../About/About";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import Products from "../Products/Products";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Services></Services>
            <Contact></Contact>
            <Products></Products>
        </div>
    );
};

export default Home;
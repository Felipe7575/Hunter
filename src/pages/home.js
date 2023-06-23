import PricingSection from "../components/pricingSection";
import SearchComponent from "../components/searchComponent";

const Home = () => {
    return(
        <div className="home">
            <SearchComponent></SearchComponent>
            <PricingSection></PricingSection>
        </div>
    )
}

export default Home;

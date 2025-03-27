import { BlurStyledBar3 } from '../components/BlurStyledBars/BlurStyledBars.styled';
import PageTitle from '../components/PageTitle/PageTitle';
import HomeHero from '../components/Home/HomeHero';
import HomeGallery from '../components/Home/HomeGallery';


const HomePage = () => {

  return  <>
            <PageTitle title="Home page" hidden={true}/>
            <HomeHero />
            <HomeGallery />
            <BlurStyledBar3/>
          </>
};

export default HomePage;

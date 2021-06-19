import './index.less';
import Introduction from '../../components/Introduction';
import { Advantages } from '../../components/Advantages';
import { Steps } from '../../components/Steps';
import { SliderSection } from '../../components/Abilities';
import { Description } from '../../components/Description';

export type LandingProps = {};

export const MY_CONST = 11;

const Landing = () => {

    return (
        <div className="landing-page">
            <Introduction />
            <Advantages />
            <Steps />
            <SliderSection />
            <Description />
        </div>
    )

};

export default Landing;

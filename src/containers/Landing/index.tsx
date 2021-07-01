import './index.less';
import Introduction from '../../components/main-page/Introduction';
import { Advantages } from '../../components/main-page/Advantages';
import { Steps } from '../../components/main-page/Steps';
import { SliderSection } from '../../components/main-page/Abilities';
import { Description } from '../../components/main-page/Description';
import { MultipleInputs } from '../../components/Form';

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
            <MultipleInputs />
        </div>
    )

};

export default Landing;

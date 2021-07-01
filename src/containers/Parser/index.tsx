
import './index.less';

import { Groups } from '../../components/parser-page/groups';
import { Brends } from '../../components/parser-page/brends';
// import { PostsTable } from '../../components/parser-page/table/index';


export type LandingProps = {};

export const MY_CONST = 11;

const Parser = () => {
    return (
        <div className="parser-page">
            <Groups />
            <Brends />
            {/* <PostsTable/> */}
        </div>
    )
};

export default Parser;
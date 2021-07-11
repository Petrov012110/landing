import Content from '../../components/item-page/Content';
import SliderItem from '../../components/item-page/SliderItem';
import './index.less';

const Item = () => {
    return (
        <div className="item">
            <div className="container">
                <SliderItem />
                <Content />
            </div>
        </div>
    )
};

export default Item;
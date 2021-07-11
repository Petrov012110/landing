import { StarOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import './index.less';


const Content = () => {
    return (
        <div>
            <div className="content">
                <div className="conteiner">
                    <div className="content__inner">
                        <div className="title">
                            <div className="title__inner">
                                <div>Yeezy 500</div>
                                <button>L</button>
                            </div>
                            <Divider>Content</Divider>
                        </div>
                        <div className="information">
                            <div className="information__inner">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Officia molestias dolorem odit ea enim minima saepe delectus. Tenetur voluptas vitae magni.
                                    Nesciunt laudantium id impedit eveniet laboriosam facere omnis reiciendis?
                                </p>
                                <div className="information__inner-list">
                                    <ul>
                                        <li>Цена:<span></span></li>
                                        <li>Продавец:<span></span></li>
                                        <li>Ссылка на пост:<span></span></li>
                                        <li>Группа:<span></span></li>
                                        <li>Дата:<span></span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Content;
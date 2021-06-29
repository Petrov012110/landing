import ReactDOM from "react-dom";
import { Collapse } from "antd";
import { Item } from "./Item";

const { Panel } = Collapse;
export const Brends = () => {
    return (
        <div className="brends">
            <div className="container">
                <div className="wrapper">
                    <div className="brends__inner">
                        <Collapse defaultActiveKey={['1']} ghost>
                            <Panel header="Brands/models" key="1">
                                <div className="brends__inner">
                                    <Item />
                                </div>
                            </Panel>
                        </Collapse>
                    </div>
                </div>
            </div>
        </div>
    )
}
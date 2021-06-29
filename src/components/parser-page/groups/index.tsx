import ReactDOM from "react-dom";
import './index.less';
import { Group } from "./Group";
import { Collapse } from 'antd';
const { Panel } = Collapse;

export const Groups = () => {
    return (
        <div className="groups">
            <div className="container">
                <div className="wrapper">
                    <Collapse defaultActiveKey={['1']} ghost>
                        <Panel header="Группы" key="1">
                            <div className="groups__inner">
                                <Group />
                                <Group />
                                <Group />
                                <Group />
                                <Group />
                                <Group />
                                <Group />
                                <Group />
                            </div>
                        </Panel>
                    </Collapse>
                </div>
            </div>
        </div>
    )
}
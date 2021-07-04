import ReactDOM from "react-dom";
import { PostsTable } from "./Table";
import './index.less'

export const Table = () => {
    return (
        <div className="table">
            <div className="container">
                <div className="wrapper">
                    <div className="table__inner">
                        <PostsTable />
                    </div>
                </div>
            </div>
        </div>
    )
}
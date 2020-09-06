import React from 'react';
import Header from "./Header";

const MainLayout = (props) => {
    return (
        <div className="nk-wrap">
            <Header />
            <div className="nk-content nk-content-fluid">
                <div className="container-xl wide-lg">
                    <div className="nk-content-body">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;

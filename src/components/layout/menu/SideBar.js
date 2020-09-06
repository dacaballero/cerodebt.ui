import React from 'react';

const SideBar = (props) => {
    return (
        <div className="nk-sidebar nk-sidebar-fixed" data-content="sidebarMenu">
            {props.children}
        </div>
    );
};

export default SideBar;

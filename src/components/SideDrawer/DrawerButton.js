import React from 'react'
import './DrawerButton.scss'
// import { DrawerButtonContext } from '../../App';

const DrawerButton = ({ drawerToggleHandler }) => {
    // const drawerButtonContext = useContext(DrawerButtonContext)
    // const drawerToggleHandler = drawerButtonContext.drawerToggleHandler
    return (

        <button className="toggle-button" onClick={drawerToggleHandler}>
            <div className="toggle-button__line"></div>
            <div className="toggle-button__line"></div>
            <div className="toggle-button__line"></div>
        </button >
    )
}

export default DrawerButton

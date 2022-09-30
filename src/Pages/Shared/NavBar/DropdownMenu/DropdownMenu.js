import React, { useRef, useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./DropdownMenu.css";
import { ReactComponent as CogIcon } from "../../../../svg/icons/cog.svg";
import { ReactComponent as ChevronIcon } from "../../../../svg/icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "../../../../svg/icons/arrow.svg";
import { ReactComponent as BoltIcon } from "../../../../svg/icons/bolt.svg";
import useData from "../../../../hooks/useData";
import { appHomeIcons } from "../../../../Icons/Icons";

const DropdownMenu = () => {
    const [activeMenu, setActiveMenu] = useState("main");
    const [previousActiveMenu, setPreviousActiveMenu] = useState("");
    const [activeSecondaryMenu, setActiveSecondaryMenu] = useState("");
    const [menuHeight, setMenuHeight] = useState(null);
    const { questionData } = useData();
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
    }, []);

    const calcHeight = (el) => {
        const height = el.offsetHeight;
        console.log(height);
        setMenuHeight(height);
    };

    const DropdownItem = (props) => {
        return (
            <button
                className="menu-item"
                onClick={() =>
                    props.goToMenu &&
                    setPreviousActiveMenu(activeMenu) &&
                    setActiveMenu(props.goToMenu)
                }
            >
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </button>
        );
    };
    console.log(activeMenu, previousActiveMenu);

    return (
        <div
            className="dropdown"
            style={{ height: menuHeight + 50 }}
            ref={dropdownRef}
        >
            <CSSTransition
                in={activeMenu === "main"}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className="menu">
                    {questionData.map((item, index) => (
                        <DropdownItem
                            key={index}
                            leftIcon={appHomeIcons[index]}
                            goToMenu={item.heading}
                        >
                            {item.heading}
                        </DropdownItem>
                    ))}

                    {/* <DropdownItem>My Profile</DropdownItem>
                    <DropdownItem
                        leftIcon={<CogIcon />}
                        rightIcon={<ChevronIcon />}
                        goToMenu="settings"
                    >
                        Settings
                    </DropdownItem>
                    <DropdownItem
                        leftIcon="🦧"
                        rightIcon={<ChevronIcon />}
                        goToMenu="animals"
                    >
                        Animals
                    </DropdownItem> */}
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === "settings"}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
                        <h2>Main Menu</h2>
                    </DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>
                        JavaScript
                    </DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>
                        Awesome!
                    </DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === "animals"}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
                        <h2>Animals</h2>
                    </DropdownItem>
                    <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
                    <DropdownItem leftIcon="🐸">Frog</DropdownItem>
                    <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
                    <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    );
};

export default DropdownMenu;

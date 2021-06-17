import React from 'react';

const Nav = props => {
    const { titles,
        currentTitle,
        setCurrentTitle
    } = props;
    return (
        <nav>
            <ul className="flex-row">
                {titles.map((title) => (
                    <li className={`mx-1 ${currentTitle === title.name && 'navActive'}`} key={title.name}>
                        <span onClick={() => setCurrentTitle(title)}>{title.name}</span>
                    </li>
                ))}
            </ul>
        </nav>
    );
};


export default Nav;
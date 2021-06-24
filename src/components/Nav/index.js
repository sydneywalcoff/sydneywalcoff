import React from 'react';

const Nav = props => {
    const { titles,
        currentTitle,
        setCurrentTitle,
        contactSelected,
        setContactSelected
    } = props;
    return (
        <nav className="col-10">
            <ul className="row">
                {titles.map((title) => (
                    <li className={`col ${currentTitle === title.name && 'navActive'}`} key={title.name}>
                        <span onClick={() => setCurrentTitle(title)}>{title.name}</span>
                    </li>
                ))}
            </ul>
        </nav>
    );
};


export default Nav;
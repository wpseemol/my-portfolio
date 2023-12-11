import { useEffect, useState } from 'react';

import { MdOutlineLightMode, MdOutlineNightlight } from 'react-icons/md';

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem('darkMode') === 'enabled'
    );

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode ? 'enabled' : 'disabled');
        document.body.classList.toggle('dark', darkMode);
    }, [darkMode]);

    const toggleDarkBode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
    };

    return (
        <button onClick={toggleDarkBode}>
            {darkMode ? (
                <div className=" text-lg  hover:shadow-2xl text-white duration-300 hover:scale-110 ">
                    <MdOutlineLightMode />
                </div>
            ) : (
                <div className=" text-lg hover:shadow-2xl text-black duration-300 hover:scale-110 ">
                    <MdOutlineNightlight />
                </div>
            )}
        </button>
    );
};

export default DarkModeToggle;

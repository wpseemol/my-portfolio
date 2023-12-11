import PropTypes from 'prop-types';
import { FaBars } from 'react-icons/fa6';

import profilePic from '../../assets/images/wpSeemol.jpg';

const MainWindowPopup = ({ isClickWindowBtn }) => {
    return (
        <div
            className={`${
                isClickWindowBtn
                    ? 'h-[40rem] origin-bottom duration-500'
                    : 'h-0 origin-bottom duration-100'
            } fixed bottom-[2.59rem] left-0 w-[40.56rem]  dark:bg-[#3C3C3C]  `}>
            {isClickWindowBtn && (
                <div className="flex h-full">
                    <div className=" flex flex-col justify-between items-center h-full">
                        <div className="p-3 text-xl">
                            <FaBars />
                        </div>
                        <div>
                            <div>
                                <figure className="w-8 h-8 rounded-full overflow-hidden">
                                    <img src={profilePic} alt="Profile pic" />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="border border-red-500"></div>
                    <div className="border border-green-400"></div>
                </div>
            )}
        </div>
    );
};

export default MainWindowPopup;

MainWindowPopup.propTypes = { isClickWindowBtn: PropTypes.bool };

import PropTypes from 'prop-types';
import { FaBars } from 'react-icons/fa6';
import { IoDocumentOutline } from 'react-icons/io5';
import { SlPicture } from 'react-icons/sl';
import { TbSettings } from 'react-icons/tb';
import { BiPowerOff } from 'react-icons/bi';

import profilePic from '../../assets/images/wpSeemol.jpg';

const MainWindowPopup = ({ isClickWindowBtn }) => {
    return (
        <div
            className={`${
                isClickWindowBtn
                    ? 'h-[40rem] origin-bottom duration-500'
                    : 'h-0 origin-bottom duration-100'
            } fixed bottom-[2.59rem] left-0 w-[40.56rem]  dark:bg-[#3C3C3C] bg-[#CFD5D7] `}>
            {isClickWindowBtn && (
                <div className="flex h-full">
                    <div className=" flex flex-col w-[50px] justify-between h-full group hover:w-[16rem] hover:shadow-lg hover:bottom-[2.59rem] hover:h-[40rem] origin-right duration-100">
                        <div className="p-3 text-xl flex items-center gap-3 hover:border dark:border-white/20 px-3 py-2 group-hover:w-full duration-200">
                            <FaBars />{' '}
                            <h2 className="uppercase font-bold group-hover:block hidden  duration-150">
                                start
                            </h2>
                        </div>
                        <div className="flex flex-col items-center group-hover:items-start gap-5 mb-3 text-lg ">
                            <div className="flex items-center gap-3 hover:border dark:border-white/20 px-3 py-2 group-hover:w-full duration-200">
                                <figure className="w-8 h-8 rounded-full overflow-hidden">
                                    <img src={profilePic} alt="Profile pic" />
                                </figure>
                                <h2 className=" group-hover:block hidden ">
                                    Seemol Chakroborti
                                </h2>
                            </div>
                            <div className="flex group-hover:items-center gap-3 hover:border dark:border-white/20 px-3 py-2 group-hover:w-full duration-200">
                                <IoDocumentOutline />
                                <h2 className=" group-hover:block hidden ">
                                    Document
                                </h2>
                            </div>
                            <div className="flex group-hover:items-center gap-3 hover:border dark:border-white/20 px-3 py-2 group-hover:w-full duration-200">
                                <SlPicture />
                                <h2 className="  group-hover:block hidden ">
                                    Picture
                                </h2>
                            </div>
                            <div className="flex group-hover:items-center gap-3 hover:border dark:border-white/20 px-3 py-2 group-hover:w-full duration-200">
                                <TbSettings />
                                <h2 className="  group-hover:block hidden ">
                                    Settings
                                </h2>
                            </div>
                            <div className="flex group-hover:items-center gap-3 hover:border dark:border-white/20 px-3 py-2 group-hover:w-full duration-200">
                                <BiPowerOff />
                                <h2 className=" group-hover:block hidden ">
                                    Power
                                </h2>
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

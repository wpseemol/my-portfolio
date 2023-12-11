import PropTypes from 'prop-types';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
const SideBar = ({ showSideBar }) => {
    return (
        <div
            className={`${
                showSideBar ? 'w-[24.5rem] origin-right' : 'w-0 origin-right'
            } fixed z-50 right-0 duration-300 top-0 bg-[#cdd3d6c5] dark:bg-[#282c2dd3] h-[calc(100vh-2.59rem)] overflow-hidden`}>
            <div className={`${showSideBar ? 'block' : 'hidden'} p-2 h-full`}>
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <p className="text-right text-[#294a58] dark:text-[#84d7fd] hover:dark:text-white hover:text-black duration-200 text-sm">
                            Manage notifications
                        </p>
                    </div>
                    <div>
                        <div className="flex items-center justify-between text-sm text-[#365463] dark:text-[#64b2d6] mb-5">
                            <p className="hover:dark:text-white hover:text-black duration-200 hover:cursor-pointer">
                                expend
                            </p>
                            <p className="hover:dark:text-white hover:text-black duration-200">
                                Clear all notifications
                            </p>
                        </div>
                        <div className=" flex items-center flex-wrap">
                            <div className="w-[90px] h-[65px] bg-white dark:bg-[#616161] border border-[#61616100] hover:border-[black] hover:dark:border-white/20 duration-200 hover:dark:bg-[#616161ab] p-2">
                                <p className="">
                                    <DarkModeToggle />
                                </p>

                                <p className="text-sm mt-1 dark:block hidden">
                                    Light mode
                                </p>
                                <p className="text-sm mt-1 dark:hidden block">
                                    Dark mode
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;

SideBar.propTypes = { showSideBar: PropTypes.bool };

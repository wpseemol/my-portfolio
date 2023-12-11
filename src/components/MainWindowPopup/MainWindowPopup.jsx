import PropTypes from 'prop-types';

const MainWindowPopup = ({ isClickWindowBtn }) => {
    return (
        <div
            className={`${
                isClickWindowBtn
                    ? 'h-[40rem] origin-bottom p-3 pb-0 duration-500'
                    : 'h-0 origin-bottom duration-100'
            } fixed bottom-[2.59rem] left-0 w-[40.56rem]  dark:bg-[#3C3C3C]  `}>
            {isClickWindowBtn && <div>this is some</div>}
        </div>
    );
};

export default MainWindowPopup;

MainWindowPopup.propTypes = { isClickWindowBtn: PropTypes.bool };

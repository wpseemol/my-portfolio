import moment from 'moment';
import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

const TimeShow = () => {
    const [nowTime, setNowTime] = useState('');
    const [nowDate, setNowDate] = useState('');

    useEffect(() => {
        setInterval(() => {
            setNowTime(moment().format('LT'));
            setNowDate(moment().format('L'));
        }, 1000);
    }, []);

    return (
        <div className="text-[12px] flex flex-col items-center px-1 hover:bg-white/10 duration-200">
            {nowDate && nowTime ? (
                <>
                    <p>{nowTime}</p> <p className="">{nowDate}</p>
                </>
            ) : (
                <ReactLoading type={'bubbles'} height={42} width={45} />
            )}
        </div>
    );
};

export default TimeShow;

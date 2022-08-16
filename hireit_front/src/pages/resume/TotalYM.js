import React, { useState } from 'react';
import 'pages/resume/ResumeInput.css';

const TotalYM = ({ arr, setArr }) => {
    const [add, setAdd] = useState(false);
    const changeFir = Number(arr.total_year[0] + arr.total_year[1]);
    const changeSec = Number(arr.total_year[0]);
    // console.log(changeNum);
    let Year = 0;
    let Month;
    if( arr.total_year[1].isNaN) {
        Month = changeSec;
    }

    while (Month > 11) {
        Month -= 12;
        Year += 1;
    }

    return (
        <>
            {add &&
                <tr className='TotalYM'>
                    <td>총 경력 {Year > 0 ? `${Year}년 ${Month}개월` : `${Month}개월`}</td>

                </tr>
            }
        </>
    );
};

export default TotalYM;
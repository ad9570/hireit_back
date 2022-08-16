import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CorpInfo = ({ com_liked, corp_photo, corp_name, corp_addr, corp_hp, corp_email }) => {



    //관심기업
    const [liked, setLiked] = useState(false);
    const [unlike, setUnlike] = useState(true);
    let username = localStorage.id;

    //URL
    let photoUrl = `${process.env.REACT_APP_SPRING_URL}save/`;
    let likedUrl = `${process.env.REACT_APP_SPRING_URL}jobposting/updateliked`;
    let unlikeUrl = `${process.env.REACT_APP_SPRING_URL}jobposting/unlike`;

    const checkLiked = () => {
        if (com_liked.indexOf(corp_name) !== -1) {
            setLiked(true);
            setUnlike(false);
        }
    }

    useEffect(() => {
        checkLiked();
    })

    return (
        <>
            <div className='right'>
                <img alt='' src={photoUrl + corp_photo} />
                <div className='c_info'>
                    <table className='cTable'>
                        <tbody>
                            <tr>
                                <td>회사명</td>
                                <td>{corp_name}</td>
                            </tr>
                            <tr>
                                <td>주소</td>
                                <td>{corp_addr}</td>
                            </tr>
                            <tr>
                                <td>연락처</td>
                                <td>{corp_hp}</td>
                            </tr>
                            <tr>
                                <td>이메일</td>
                                <td>{corp_email}</td>
                            </tr>
                            <tr className='heartbtn'>
                                <td colSpan='2'>
                                    {unlike &&
                                        <button type='button' className='btn btn-outline-danger' onClick={() => {
                                            setUnlike(false);
                                            setLiked(true);

                                            axios.get(likedUrl + "?username=" + username + "&com_liked=" + corp_name).then(res => {
                                                // console.log(corp_name);
                                                alert("관심기업 설정이 완료되었습니다");
                                            })
                                        }}>관심기업 ♡</button>
                                    }
                                    {liked &&
                                        <button type='button' className='btn btn-danger' onClick={() => {
                                            setUnlike(true);
                                            setLiked(false);
                                            axios.get(unlikeUrl + "?username=" + username + "&corp_name=" + corp_name).then(res => {
                                                console.log(corp_name);
                                                alert("관심기업 설정이 해제되었습니다");
                                            })
                                        }}>관심기업 ♥</button>
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default CorpInfo;
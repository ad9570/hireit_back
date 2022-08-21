import React from 'react';
import LikeButton from '../pages/LikeButton';
import '../App.css';


const CommunityFooter = () => {
    return (
        <div className="communityfooter">
      <div class="wrap_footer">
       
        <div class="copyright">
    <div class="help_list">
        <dl>
            <dt>고객센터</dt>
            <dd>02-1234-5678 (평일 09:00~19:00, 주말공휴일 휴무)</dd>
        </dl>
        <dl>
            <dt>이메일</dt>
            <dd><a href="mailto:help@saramin.co.kr" target="_blank" title="이메일 바로가기">hierit@kakao.co.kr</a></dd>
        </dl>
        <dl>
            <dt>FAX</dt>
            <dd>02-0000-0000</dd>
        </dl>
    </div>


</div>    </div>
         </div>
    );
};

export default CommunityFooter;
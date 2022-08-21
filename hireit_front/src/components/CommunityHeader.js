import { padding } from '@mui/system';
// import React from 'react';
import '../App.css';
import infoimg from '../image/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap";
import { ForkRight } from '@mui/icons-material';
import React, { useContext, useEffect, useState } from 'react';
import './common.css';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import Category from './Category';
import SearchQuery from './search/SearchQuery';
import { useNavigate } from 'react-router-dom';
import logo from '../images/hireit-logo-rect.png'
import { LoginContext } from '../contexts/LoginContext';

import axios from 'axios';

const CommunityHeader = () => {

  const [toggleBtn, setToggleBtn] = useState(false);
  
  const {indivLogin,setIndivLogin,login} = useContext(LoginContext);
  const [searchToggle, setSearchToggle] = useState(false);
  const [catDisplay, setCatDisplay] = useState('none');
  const catToggle=()=>{
      if(catDisplay == 'none')
          setCatDisplay('block')
      else
          setCatDisplay('none')
  }

  const [alarmCount, setAlarmCount] = useState(null);
  useEffect(()=>{
      const getAlarmCountUrl = process.env.REACT_APP_SPRING_URL + "getAlarmCount?id=" + login.id;
      axios.get(getAlarmCountUrl)
      .then(res=>{
          setAlarmCount(res.data)
      })
      .catch(err=>{
          console.log("실패!")
      })
  },[])















  const navi=useNavigate();


    return (
      <>
            <div role='presentation' className="header-wrap" style={{position:'fixed',paddingRight:'initial',fontFamily:'S-CoreDream-5Mediumz ',color:'#333'}}>
                {/* <div className='header-main-wrap'> */}
                <nav className='header-main-nav'>

                    <div className="header-main-nav-top">
                        {/* <button className="header-main-hamberger-button">
                            <MenuIcon 
                                onClick={e=>{
                                    catToggle()
                                }}/>
                        </button> */}
                        
                        <a href="/" className="header-main-logo" style={{color:'#333',textDecoration:'none'}}>
                        <img style={{width:'25px',marginRight:'10px',marginLeft:'5px'}} src={logo} alt="" />

                            HIREiT
                        </a>
                    </div>

                    <ul className="header-main-nav-menu">
                       
                       
                        <li className="header-main-navs">
                            <a href="/community" style={{textDecoration:'none'}}>커뮤니티홈</a>
                        </li>
                        <li className="header-main-navs">
                            <a href="/board/list/1" style={{textDecoration:'none'}}>글 전체</a>
                        </li>
                        <li className="header-main-navs">
                            <a href="/community/comm_mypage" style={{textDecoration:'none'}}>MY프로필</a>
                        </li>
                    </ul>

                    <aside className="header-main-nav-aside">
                        <ul>
                            <li>
                                <button className='search-button' style={{outline:'none'}}
                                onClick={()=>{
                                    setSearchToggle(!searchToggle);
                                }}>
                                    <SearchIcon sx={{color:searchToggle?'#0a58ca':''}}/>
                                </button>
                            </li>
                            {indivLogin?<li style={{margin:'3px 3px 0 15px',cursor:'pointer' }}
                                onClick={()=>{
                                    navi(`/mypage`)
                                }}>
                                 
                            {console.log('toggleBtn',toggleBtn)}
                            </li>:''}
                            {!indivLogin&&<li>
                                <button className="signup-button"
                                    onClick={()=>{
                                        if(indivLogin){setIndivLogin(!indivLogin)}else navi(`/login`)
                                    }}>
                                    회원가입/로그인
                                </button>
                            </li>}
                            <li className='visible left-division'>
                                <a className='dashboard-button' href="/corp/welcome" style={{textDecoration:'none'}}>기업 서비스</a>
                            </li>
                            <li></li>
                        </ul>
                    </aside>
                </nav>
                {/* </div> */}
            </div>
            <div className='main-header-category' style={{display:catDisplay}}>
                <Category/>            
            </div>
            <div className="padding-main-padding"></div>
            <SearchQuery st={searchToggle}/>

          
        </>        
         
    );
};

export default CommunityHeader;
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
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));


const Header = () => {
    const [toggleBtn, setToggleBtn] = useState(false);
    const navi = useNavigate();
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
                            <a href="/search" style={{textDecoration:'none'}}>채용</a>
                        </li>
                        <li className="header-main-navs">
                            <a 
                                onClick={()=>{
                                    if(indivLogin){navi(`/resume/input/${id}`)}else{navi(`/login`)}
                                }}>이력서</a>
                        </li>
                        <li className="header-main-navs">
                            <a href="/community" style={{textDecoration:'none'}}>커뮤니티</a>
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
                                    {/* <i className="bi bi-bell" style={{fontSize:'15px', color:'#333',cursor:'pointer'}}></i> */}
                                    <StyledBadge
                                        overlap="circular"
                                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                        //알람 false면 주석
                                        variant={alarmCount>0?"dot":''}
                                    >
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{width:'30px',height:'30px'}} 
                                            onMouseOver={()=>{setToggleBtn(!toggleBtn)}}
                                            onMouseOut={()=>{setToggleBtn(!toggleBtn)}}
                                        />
                                    </StyledBadge>
                                {/* <i class="bi bi-person-circle" style={{fontSize:'23px', color:'#333',cursor:'pointer'}}></i> */}
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

            {/* toggle */}
            
            <ul class="dropdown-menu" style={{display:toggleBtn?'flex':'none', position:'fixed',flexDirection:'column',zIndex:'9999',right:'300px',top:'44px'}}
                onMouseOver={()=>{setToggleBtn(true)}}
                onMouseOut={()=>{setToggleBtn(false)}}>
                <li style={{fontSize:'14px'}}><a class="dropdown-item" href="/mypage/alarm">내 소식 ({alarmCount})</a></li>
                <li style={{fontSize:'14px'}}><a class="dropdown-item" href="/mypage">마이페이지</a></li>
                <li style={{fontSize:'14px',borderTop:'1px solid lightgray'}}
                    onClick={()=>{}}><a class="dropdown-item" href="#"><span style={{color:'gray'}}>로그아웃</span></a></li>
            </ul>
        </>        
    );
};

export default Header;
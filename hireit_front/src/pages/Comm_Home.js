import { margin } from '@mui/system';
import React, { Component,useEffect,useState } from 'react';

import img5 from "../image/hireitcommunity.jpg";
import {useNavigate,useParams,Link} from "react-router-dom";
import Comm_Total from "./Comm_Total";

import BoardList1 from './BoardList1';
import '../App.css';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MiniCareer from './MiniCareer';
import MiniChwieob from './MiniChwieob';
import MiniQandA from './MiniQandA';
import MiniIjig from './MiniIjig';
import MiniToesa from './MiniToesa';
import MiniJabdam from './MiniJabdam';


const Comm_Home = () => {
        const [data,setData]=useState('');    

     
        //url 선언
        let pagelistUrl="http://localhost:9001/board/pagelist?=";
        let photoUrl="http://localhost:9001/save/";
    
        //시작시 호출되는 함수 
        const pageList=()=>{
            axios.get(pagelistUrl)
            .then(res=>{
               
                setData(res.data);
            })
        }
    
            useEffect(()=>{
                pageList();
                console.log("photo",data)
            },[]);
    
    const {num,currentPage}=useParams();
    const [dto,setDto]=useState('');
    const navi=useNavigate();
    

   
    const [nickname,setNickname]=useState(null);

    const username = localStorage.username;

    //url 선언
    let selectnickUrl = "http://localhost:9001/board/selectnick?username="+username;
    let updatenickUrl = "http://localhost:9001/board/updatenick?username="+username + "&nickname=" + nickname;

        //가져오는 함수
          const onDataReceive=()=>{
                axios.get(selectnickUrl)
                .then(res=>{
                  setNickname(res.data.nickname);
                        console.log(res.data.nickname)
                }).catch(err=>{
                   console.log(err.data);
              })
        }

          //처음 랜더링시 위의 함수 호출
                useEffect(()=>{
                        console.log(window.location);
                        onDataReceive();
                },[username]);

          //수정하는 함수 이벤트
                const onUpdate=()=>{
                        axios.post(updatenickUrl)
                        .then(res=>{
                        //insert 성공후 처리할 코드들          
                        //목록으로 이동
                        console.log("성공")
                        })
                }

 
        return ( 
                
        <div>

<div style={{border: "1px solid #ffff", float: "left", width: "70%",height:"330px" , top:"30px"}}>
<img src={img5} className="logo" alt='' style={{width:"850px"}} />
</div>

<div style={{border: "1px solid #ffff",position:"relative",left:"10px", float: "left", width: "380px",height:"420px"}}>
        
<div className="my_area">
{/* <div style={{border: "1px solid #ffff", float: "left", width: "45%",padding:"10px"}}>

<img id="divProfile" src="https://ssl.pstatic.net/static/pwe/address/img_profile.png" alt=""></img>
</div> */}
        <div className="profile_pic_wrap">
              

<div style={{border: "1px solid #ffff", float: "left", width: "80%",padding:"10px 20px 30px 20px" }}>

            <div className="member_info_row">
                    <strong className="name">
                       <strong style={{color:"blue"}}> {username}</strong>님
                    </strong>
            </div>

            
            {/* <div className="member_info_row">
                <div className="member_info_col2">
                        <span className="tit">작성글</span>
                        <strong className="count">1</strong>
                        <span className="tit">댓글</span>
                        <strong className="count">0</strong>
                </div>
            </div> */}
</div>

        </div>

    

<div style={{border: "1px solid #ffff", float: "left", width: "100%", height:"500px"}}>
        <button type="button" className="btn btn-light"
                        style={{height:"50px",width:"260px",position:"relative",marginTop:"10px"}}
                        onClick={()=>{
                        navi("/community/comm_mypage");
                        }}>닉네임 수정
        </button>
</div>

</div>
</div>

  {/* 실시간전체 & 검색창 래퍼 */}
<div className='bbb' style={{border: "1px solid #ffff", float: "left", width: "109%"}}>
<div className='aaa' style={{border: "1px solid #ffff", float: "left", width: "33%"}}>
<div className="header-logo-search-wrap">
<div className="cate_total"> 
       <strong className='cate_total' 
        style={{color: "#373f57",
        fontSize: "24px",
        fontWeight: "bold",
        letterSpacing: '-2px'
}}>실시간 전체글</strong><strong className='cate_total' style={{color: "#373f57",
fontSize: "24px",
fontWeight: "bold",
letterSpacing: '-2px'
}}>&nbsp;{data.totalCount}개</strong>


       </div>

                </div>
</div>
<div style={{border: "1px solid #ffff", float: "left", width: "33%",padding:"10px"}}></div>
<div style={{border: "1px solid #ffff", float: "left", width: "33%",padding:"10px"}}><div className="search">
           <nav className="navbar navbar-light" style={{backgroundcolor: "#e3f2fd"}}>
               <div className="container-fluid">
               <button type="button" className="btn btn-primary"
                        style={{height:"50px",width:"260px",position:"relative" ,left:"80px"}}
                        onClick={()=>{
                        navi("/board/form");
                        }}>글쓰기
                </button>
                 {/* <form className="d-flex">
                 
                   <input style={{width:"300px"}} className="form-control me-2" type="search" placeholder="다른사람들은 어떤 이야기를 할까?" aria-label="Search"/>
                   <button className="btn btn-outline-primary" type="submit">Search</button>
                 </form> */}
               </div>
             </nav>
           </div></div>
         </div>

        <div>
         <div className='red' style={{border: "1px solid #eaedf4", float: "left", width: "100%", position:"relative",height:"540px", padding:"20px" }}>
        
            {/* <h1 className="alert alert-info">
                총 {data.totalCount} 개의 개시글이 있습니다
                </h1> */}

                
     <div className='textover' style={{}}>      


        <div class="wrap_title" style={{position:"relative", right:"20px"}}>
                <h4 class="title">
                <a href="/board/list/1" class="link_go">
                        <b class="hot">HOT</b> 실시간 전체글 🔥</a>
                </h4>
                <a href="/board/list/1" class="link_more" style={{textDecoration:"none" ,color:"#373f57"}}>더보기</a>
        </div>

            <table id="table_id" className="table table-bordered" style={{width:'800px'}}>
                {/* <thead>
                    <tr style={{backgroundColor:'#ddd'}}>
                  
                    <th width='200'>제목</th>
                    <th width='500'>내용</th>
                    <th width='200'>조회</th>
                    </tr>
                </thead> */}
                
                <tbody>
        {
            data.list && data.list.map((row,idx)=>(
                <ul style={{display:'flex'}}>
                   <li>
                      
                                <th onClick={()=>{
                                        navi(`/board/detail/${row.board_id}`)
                                }} style={{cursor:'pointer'}}>
                                        {/* <img alt="" className="photo_small"
                                        src={photoUrl+row.photo}/> */}
                                        <span className='txt'>{row.title}</span>
                                </th>
                    

                    {/* <th onClick={()=>{
                        navi(`/board/detail/${row.board_id}`)
                    }} style={{cursor:'pointer'}}>
                        <span className='txt2'>{row.content}</span>
                        </th> */}
  <th>
                    <span className='txt'>{row.content}</span>
                    </th>
                        <th>
                    <span className='txt4'>{row.hit}</span>
                    </th>
                    </li>
                </ul>
            ))
        }
                </tbody>
                
            </table>
          

            </div>
            {/* 페이징
            <div style={{width:'700px', textAlign:'center'}}>
                <ul className="pagination">
                    {
                        (data.startPage>1?<li>
                            <Link to={`/board/list/${data.startPage-1}`}>이전</Link></li>:'')
                    }
                    {
                        data.parr &&
                         data.parr.map(n=>{
                            const url="/board/list/"+n;
                            return(
                                <li>
                                    <Link to={url}><b
                                    style={{color:n==currentPage?'red':'black'}}>{n}</b></Link>
                                </li>
                            )
                        })
                    }
                    {
                        (data.endPage<data.totalPage?
                        <li><Link to={`/board/list/${data.endPage+1}`}>다음</Link></li>:'')
                    }
                </ul>
            </div> */}
            
       
        </div>
       
</div>


        <div> 
       <strong className='categotycomm' style={{
        color: "#373f57",
        fontSize: "24px",
        fontWeight: "bold",
        letterSpacing: '-2px',
        lineHeight: "32px",
        position:'relative',
        color:"#ffff"
        }}>주제별 커뮤니티</strong>
            </div>



       

        <div className='green' style={{border: "1px solid #ffff", width: "100%", height:"1200px"}}>
      

        <div> 
       <strong className='categotycomm' style={{
        color: "#373f57",
        fontSize: "24px",
        fontWeight: "bold",
        letterSpacing: '-2px',
        lineHeight: "32px",
        position:'relative',
        color:"#373f57"
        }}>주제별 커뮤니티</strong>
            </div>
        <br></br>


                                    
               {/* {category} */}
                    <div className='total_button2'>
                        <button type="button" class="btn btn-outline-primary"
                            onClick={()=>{
                                navi("/board/list/1");
                                }}>전체글</button>

                        <button type="button" class="btn btn-outline-primary"
                           onClick={()=>{
                                navi("/board/Career");
                            }}>커리어</button>

                        <button type="button" class="btn btn-outline-primary"
                            onClick={() => {
                                 navi("/board/qanda");
                            }}>Q&A</button>

                        <button type="button" class="btn btn-outline-primary"
                            onClick={() => {
                                navi("/board/chwieob");
                            }}>취준</button>

                        <button type="button" class="btn btn-outline-primary"
                            onClick={() => {
                                navi("/board/ijig");
                            }}>이직</button>

                        <button type="button" class="btn btn-outline-primary"
                            onClick={() => {
                                navi("/board/toesa");
                            }}>퇴사</button>
                            
                        <button type="button" class="btn btn-outline-primary"
                            onClick={() => {
                                navi("/board/jabdam");
                            }}>잡담</button>
                    </div>
               


      
<div style={{border: "1px solid #eaedf4", float: "left", width: "47%", height:"350px",padding:"30px", margin:"20px 77px 0px 00px",borderRadius: "12px"
}}>
<a href='board/category' className='linkgo'>잡담</a>
                <MiniJabdam/>
</div>

<div style={{border: "1px solid #eaedf4", float: "left", width: "47%",padding:"30px", margin:"20px 0px 50px 00px",borderRadius: "12px"
}}>
                <a href='board/category' className='linkgo'> 커리어</a>
                
                <MiniCareer/><FontAwesomeIcon icon="fa-duotone fa-eye" />
          
                
</div>

<div style={{border: "1px solid #eaedf4", float: "left", width: "47%", height:"300px",padding:"30px", margin:"0px 77px 0px 00px",borderRadius: "12px"
}}>
                <a href='' className='linkgo'> Q&A</a>
                <MiniQandA/>

</div>

<div style={{border: "1px solid #eaedf4", float: "left", width: "47%", height:"300px",padding:"30px", margin:"0px 0px 50px 00px",borderRadius: "12px"
}}>
                <a href='' className='linkgo'>취준</a>
                <MiniChwieob/>

</div>        

<div style={{border: "1px solid #eaedf4", float: "left", width: "47%", height:"300px",padding:"30px", margin:"0px 77px 0px 00px",borderRadius: "12px"
}}>
                <a href='' className='linkgo'>이직</a>
                <MiniIjig/>

</div>

<div style={{border: "1px solid #eaedf4", float: "left", width: "47%", height:"300px",padding:"30px", margin:"0px 0px 50px 00px",borderRadius: "12px"
}}>
                <a href='/community/detail/18/1' className='linkgo'> 퇴사</a>
                <MiniToesa/>
        </div>          

        </div>
                                                                    
      
      
        



</div>

          
        )
    }




export default Comm_Home;
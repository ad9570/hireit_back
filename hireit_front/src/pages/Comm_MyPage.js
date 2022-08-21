import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React,{useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import '../App.css';
import MiniCareer from "./MiniCareer";
import MiniChwieob from "./MiniChwieob";
import MiniIjig from "./MiniIjig";
import MiniJabdam from "./MiniJabdam";
import MiniQandA from "./MiniQandA";
import MiniToesa from "./MiniToesa";


const Comm_MyPage = () => {
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


        {/* 
        //보내는 함수
        axios.post(updatenickUrl,{username,nickname}).then(res=>{
                //데이터 전송후 일어날 일
        })
*/}
    
    return (
        <div>
           <div className="my_areapage">
<div style={{border: "1px solid #ffff", float: "left", width: "45%",padding:"10px"}}>

{/* <img id="divProfile" src="https://ssl.pstatic.net/static/pwe/address/img_profile.png" alt=""></img> */}
</div>
        <div className="profile_pic_wrap">
              

<div style={{border: "1px solid #ffff", float: "left", width: "33%",padding:"10px 20px 30px 20px"}}>

            <div className="member_info_row">
                    <strong className="name">
                       <strong style={{color:"blue"}}> {username}</strong>님
                    </strong>
            </div>

            
           
</div>

        </div>

    






<div style={{border: "1px solid #ffff", float: "left", width: "100%", height:"100px"}}>
     
{/* <!-- Button trigger modal --> */}
<button type="button" class="btn btn-light" style={{height:"50px",width:"260px",position:"relative", marginTop:"70px"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
  프로필 수정
</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">프로필 등록</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        
<div class="input-group"> 닉네임
 
 
<input type='text' className="form-control"
                            style={{width:'250px'}} value={nickname}
                            onChange={(e)=>{
                                setNickname(e.target.value);
                            }}/>

    

</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
       



        <button type="button" className="btn btn-primary"
                        //     style={{width:'120px',height:'120px',marginLeft:'30px'}}
                            onClick={onUpdate} data-bs-dismiss="modal">
                                저장</button>


      </div>
    </div>
  </div>
</div>
        <button type="button" className="btn btn-primary"
                        style={{height:"50px",width:"260px",position:"relative", marginTop:"70px"}}
                        onClick={()=>{
                        navi("/board/form");
                        }}>글쓰기
        </button>
</div>


{/* <div class="card">
  <div class="card-header">
    내가 쓴 글
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
         
<div style={{border: "1px solid #eaedf4", float: "left", width: "47%", height:"350px",padding:"30px", margin:"20px 77px 0px 00px",borderRadius: "12px"
}}>
<a href='board/category' className='categotycomm' style={{color:"gray", textDecoration:"none"}}>잡담</a>
                <MiniJabdam/>
</div>


  
      <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
</div> */}




</div>


        </div>
    );
};

export default Comm_MyPage;
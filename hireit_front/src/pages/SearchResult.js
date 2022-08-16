import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import corpImg from '../images/corp.png';

const Container = styled.div`
    max-width:1060px;
    width: 1060px;
`;
const SearchWord = styled.div`
    display:flex;
    justify-content:center;
    padding: 40px 0;

`;
const CardWrap = styled.div`
    display:flex;
    flex-direction:column;
    margin: 30px 0;
`;
const Cards = styled.ul`
    display:flex;
    flex-wrap:wrap;
    padding-left:0;
    >div{
        margin:50px auto;
    }
`;
const Title = styled.h4`

`;
const CorpCard = styled.li`
    >a {
        width: 510px;
        margin: 10px;
        border:1px solid #e1e2e3;
        display:flex;
        align-items: center;
        padding: 21px 20px;
        background: #fff;
        border-radius: 2px;
        justify-content: space-between;
    }
    .corpImg{
        width:58px;
        height:58px;
        margin-right: 20px;
        background-size: 100%;
        background-position: 50%;
        background-repeat: no-repeat;
    }
    h5{
        color: #333;
        font-size: 18px;
        font-weight: 400;
        line-height: 27px;
        margin-bottom: 4px;
        
    }
    h6{
        color: #999;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
    }
    h5, h6{
        margin: 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

`;
const CorpButton = styled.button`
    border: 1px solid #e1e2e3;
    height: 40px;
    font-size: 15px;
    color: #36f;
    background-color: #fff;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    min-width: 64px;
    padding: 0 27px;
    box-sizing: border-box;
    border-radius: 25px;
    font-weight: 700;
    line-height: normal;
    corsur:pointer;
    .button-label{
        width: 100%;
        font-size: inherit;
        font-weight: inherit;
        display: inherit;
        align-items: inherit;
        justify-content: inherit;
        color: inherit;
    }
`;
const Card = styled.li`
    width:245px;
    height:300px;
    border:1px solid #e1e2e3;
    border-radius: 10px;
    margin:10px;
    >a{
        position: relative;
        overflow: hidden;
        display: block;
        width: 100%;
        padding-top: 66.802%;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        color: #333;
    text-decoration: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
    }
    .img-box{
        position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    }
    .thumbs-img{
        background-image: url(${corpImg});
        width: 100%;
        height: 100%;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
    }
`;
const ContentBox = styled.div`
    padding: 17px 20px 16px;
    width: 100%;
    box-sizing: border-box;
    >a{
        color: #333;
        position: relative;
        display: block;
        height: 100%;
        text-decoration: none;
        cursor: pointer;
        margin: 0;
        padding: 0;
    }
    .title{
        max-height: 50px;
        font-size: 18px;
        line-height: 25px;
        font-weight: bold;
        color: #323438;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-wrap: break-word;
    }
    .desc{
        margin-top: 8px;
        max-height: 44px;
        font-size: 14px;
        line-height: 22px;
        font-weight: 400;
        color: #85878c;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-wrap: break-word;
    }
`

const SearchResult = () => {
    let [searchParams, setSearchParams] = useSearchParams();

    const corpInfo = [];
    const jobInfo = [];
    const [corp, setCorp] = useState([]);
    const [job, setJob] = useState([]);
    const [test, setTest] = useState([]);

    const corpList = [];

    const searchCorpUrl = `${process.env.REACT_APP_SPRING_URL}searchCorp?q=${searchParams.get('q')}&currentPageCorp=${searchParams.get('corp')}`;
    const searchJobUrl = `${process.env.REACT_APP_SPRING_URL}searchJob?q=${searchParams.get('q')}&currentPageJob=${searchParams.get('job')}`;
    useEffect(() => {

        axios.get(searchCorpUrl)
            .then(res => {
                console.log(res.data)
                setCorp(res.data)
            })
            .catch(err => {
                console.log("1연관검색어 검색 실패")
            })
        axios.get(searchJobUrl)
            .then(res => {
                console.log(res.data)

                setJob(res.data)
            })
            .catch(err => {
                console.log("2연관검색어 검색 실패")
            })
    }, [])
    return (
        <div style={{ display: 'flex', justifyContent: 'center', minHeight: '100vh' }}>
            
            {console.log("list",job['list'])}
            <Container>
                <SearchWord>
                    <h3>{searchParams.get('q')}</h3>
                </SearchWord>
                <hr />
                <CardWrap>
                    <Title>기업 {corp.no==null?0:corp.no}</Title>
                    <Cards>
                        {
                            corp.no == null ?
                                <div>"{searchParams.get('q')}" 검색어에 해당하는 기업이 존재하지 않습니다.</div>
                                : corp.list.map((data, idx) => (
                                    <CorpCard>
                                        <a style={{ textDecoration: 'none' }} href="">
                                            <div style={{ display: 'flex' }}>
                                                <div className='corpImg'
                                                    style={{ backgroundImage: `url(${corpImg})` }}>
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                    <h5 style={{ fontWeight: '400' }}>{data.corpName}</h5>
                                                    <h6>{data.corpAddr}</h6>
                                                </div>
                                            </div>
                                        </a>
                                    </CorpCard>
                                ))
                        }
                    </Cards>
                </CardWrap>
                <hr />
                <CardWrap>
                    <Title>채용정보 {job.no==null?0:job.no}</Title>
                    <Cards>
                        {
                            job.no == null?
                                <div>"{searchParams.get('q')}" 검색어에 해당하는 채용정보가 존재하지 않습니다.</div>
                                : job.list.map((data, idx) => (
                                    <Card key={idx}>
                                        <a href="#">
                                            <div className="img_box">
                                                <img src={corpImg} alt="" className="thumns-img" />
                                            </div>
                                        </a>
                                        <ContentBox>
                                            <a className="link" href="" target="_blank" onclick="GA.event('main_test_v1','company_story_title', { label: '7' });">
                                                <h6 style={{margin:'0 0 8px '}}>{data.corpName}</h6>
                                                <h3 style={{ margin: '0' }} class="title">{data.jobPostingTitle}</h3>
                                                <div class="desc">{data.jobType}</div>
                                            </a>
                                        </ContentBox>
                                    </Card>
                                )
                                )
                        }
                    </Cards>
                    {/* 페이징 */}
                    {/* <div style={{width:'700px', textAligh:'center',display:'flex',justifyContent: 'center'}}>
                        <ul className='pagination'>
                            {job&&(job.startPage>1&&<li><Link to={`/search?q=${searchParams.get('q')}&currentPageCorp=${job.startPage-1}`}>이전</Link></li>)}
                            {
                                job&&job.parr.map(n=>{
                                    const url = `/search?q=${searchParams.get('q')}&currentPageCorp=`+n
                                    // data.endPage%5==0?
                                    return<li>
                                        <Link to={url}><b style={{color:n==searchParams.get('job')?'red':'black'}}>{n}</b></Link>
                                    </li>
                                })
                            }
                            {job&&job.endPage<job.totalPage?(<li><Link to={`/search?q=${searchParams.get('q')}&currentPageCorp=${job.endPage+1}`}>다음</Link></li>):''}
                        </ul>
                    </div> */}
                </CardWrap>
            </Container>
        </div>
    );
};

export default SearchResult;
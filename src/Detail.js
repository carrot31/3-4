import React from "react";
import styled from 'styled-components';
import './App.css';

import { useHistory,useParams } from "react-router-dom";

const Detail = (props) => {
    console.log(props);
    const history = useHistory();
    const {id} = useParams(); 

    const [grade, setGrade] = React.useState(0);



  React.useEffect(() => {

    const press = (e) => {

      if ([1, 2, 3, 4, 5].indexOf(parseInt(e.key)) !== -1) {
        setGrade(parseInt(e.key)); 
      }
    };
    window.addEventListener("keydown", press);

    return () => window.removeEventListener("keydown", press);
  },[]);

    return (
        
            <Container>
                <span>{id}요일</span>{' '}평점 남기기

                <CircleBox>
                    {Array.from({ length: 5 }, (item, idx) => {
                        // console.log('이거', grade)
                        return (
                            <Heart className="icon"
                                key={idx}
                                idx={idx}
                                grade={grade}
                                onClick={() => {setGrade(idx + 1);}}
                            />                      
                        );
                    })}
                </CircleBox>

                <Button onClick={() => { history.goBack(); }}>
                    평점 남기기
                </Button>

            </Container>
    
    );
}
const Container = styled.div`
  margin: 40px auto 20px auto;
  padding: 20px 0px;
  text-align: center;
  font-size: 20px;
  font-family: 'OTJalollineunharuRA';
  span{
      padding: 12px 10px 8px 10px;
      border-radius: 5px;
      color: white;
      background: pink; 
  }
`;
const CircleBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0px;
    width: 100%;

`;
const Button = styled.button`
    width: 250px;
    height: 50px;
    padding-top: 5px;
    background: #F4E988;
    color: white;
    border: 0px;
    border-radius: 5px;
    cursor: pointer; 
    font-size:20px;
    font-family: 'OTJalollineunharuRA';
    &:hover{
        box-shadow: 0px 0px 5px 0px gray;
    }
`;
const Heart = styled.div`
    width: 20px;
    height: 20px;
    background: red;
    position: relative;
    background: ${props=>props.grade < props.idx+1 ? "#ddd" : "lightblue"};
    transform: rotate(-45deg);
    margin: 12px;
    &::before{
        content: '';
        width: 20px;
        height: 20px;
        position: absolute;
        top: -50%;
        left: -0%;
        border-radius:50%;
        background: ${props=>props.grade < props.idx+1 ? "#ddd" : "lightblue"};
    }
    &::after{
        content:'';
        width: 20px;
        height: 20px;  
        position: absolute;
        border-radius:50%;
        background: ${props=>props.grade < props.idx+1 ? "#ddd" : "lightblue"};
    }
`;

export default Detail;
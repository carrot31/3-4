import React from "react";
import styled from 'styled-components';
import { IoIosArrowDroprightCircle,IoMdSad,IoMdHappy } from "react-icons/io";
import {} from 'react-transition-group';  
import './App.css';

import { useHistory } from "react-router-dom";


const Main = (props) => {
    // console.log(props)
    const history = useHistory();
    
    let week = ["일", "월", "화", "수", "목", "금", "토"];
    const today = new Date().getDay(); //0123456
    const first = week.splice(0, today); //first: [일,월] week:[화, 수, 목, 금, 토]
    week = [...week,...first]; // week: [화,수,목,금,토,일,월]
    // console.log(week)

    const week_rates = week.map((a, i) => {  //a: 월화수목금토일 //i: 0123456
        return {
            day: a,                             
            rate: Math.floor(Math.random() *5) //rate: 341234
        };
    });
    // console.log(week_rates)

    return (
        <>  
            <Icons>
              <IoMdHappy className="icon"/><IoMdSad className="icon"/> 
              <IoMdHappy className="icon"/><IoMdSad className="icon"/>       
            </Icons>
            
            <Title>내 일주일은?</Title>
            {week_rates.map((b, i) => {   //b:(day월:rate3(i0))[i], 화:5(1), 수:1(2)...
                return (
                    <CircleBox key={`week_${i}`}>
                        <WeekFont>{b.day}</WeekFont>
                        {Array.from({ length: 5 }, (item, idx) => {
                            return (
                              <Circle
                              key={idx}
                              rate={b.rate}
                              idx={idx}
                              />   
                            );
                        })}
                        <IoIosArrowDroprightCircle className="icon"
                           
                            onClick={() => { history.push(`/detail/${b.day}`); }} 
                        />
                        
                    </CircleBox>  
                );
            })}
        </>
    );
}

const Icons = styled.div`
  text-align: center;
  .icon{
    font-size: 30px;
    color: gold;
  }
  .icon:hover{
    color: slateblue;
  }

`;
const Title = styled.h2`
  text-align: center;
  margin-top: 20px;
  font-family: 'OTJalollineunharuRA';
`;
const WeekFont = styled.div`
  font-size: 15px;
  margin-right: 5px;
  font-size: 18px;
  font-family: 'OTJalollineunharuRA';
`;
const CircleBox = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0px;
  width: 100%;  
  .icon{
    font-size: 38px;
    color: pink;
  }
  .icon:hover{
    color: gold;
  }
`;
const Circle = styled.div`
  width:30px;
  height: 30px;
  border-radius: 30px;
  margin:5px;
  background: ${(props) => props.rate < props.idx? "#ddd" : "#80D6CB"};
  
`;

export default Main;

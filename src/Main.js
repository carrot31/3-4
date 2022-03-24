import React from "react";
import styled from 'styled-components';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { TiAdjustBrightness, TiWeatherPartlySunny,TiWeatherDownpour } from "react-icons/ti";

import { useHistory } from "react-router-dom";
import { keyframes } from "styled-components";


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
   
    const sun = <TiAdjustBrightness size="30px" color="red"/>
    const cloud = <TiWeatherPartlySunny size="30px" color="gold"/>
    const rain = <TiWeatherDownpour size="30px" color="blue"/>

    return (
        <> 
          <Ani>
            <Sun>{sun}</Sun> <Cloud>{cloud}</Cloud> <Rain>{rain}</Rain>
          </Ani>
          <Title>오늘, 당신의 날씨는?</Title>
            {week_rates.map(({day,rate}, i) => {   //b:{day: '수', rate: 0}
                return (

                      <CircleBox key={`week_${day}`}>   
                        <Weather>
                          {rate < 2 ? rain:
                          (rate < 3 ? cloud : sun )}
                        </Weather> 
                        <WeekFont>{day}</WeekFont>                    
                        {Array.from({ length: 5 }, (item, idx) => {
                            return (
                              <Circle
                              key={idx}
                              rate={rate}
                              idx={idx}
                              />   
                            );
                        })}
                        <IoIosArrowDroprightCircle size='38px' color='#F4E988'   
                            onClick={() => { history.push(`/detail/${day}`); }} 
                        />

                    </CircleBox>  
                    
                );
            })}
        </>
    );
}

const Animation = keyframes`
  0% {
    top:0px;
  }
  50% {
    top:10px;
  }
  100% {
    top:0px;
  }
`;
const Ani = styled.div`  
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Sun = styled.div`  
  position: relative;
  text-align: center;
  animation: ${Animation} 1s infinite linear; 
  animation-delay: 0s;
`;
const Cloud = styled.div`  
  position: relative;
  text-align: center;
  animation: ${Animation} 1s infinite linear; 
  animation-delay: 0.3s;
`;
const Rain = styled.div`  
  position: relative;
  text-align: center;
  animation: ${Animation} 1s infinite linear;
  animation-delay: 0.6s; 
`;
const Title = styled.h2`
  text-align: center;
  font-family: 'OTJalollineunharuRA';
  span{
    font-size: 30px;
  }
`;
const CircleBox = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0px;
  width: 100%;  
`;
const Weather = styled.div`
  padding-right: 10px;
`;
const WeekFont = styled.div`
  font-size: 15px;
  margin-right: 5px;
  font-size: 18px;
  font-family: 'OTJalollineunharuRA';
`;
const Circle = styled.div`
  width:30px;
  height: 30px;
  border-radius: 30px;
  margin:5px; 
  background: ${(props) => props.rate < props.idx? "#ddd" : "lightblue"};
`;

export default Main;

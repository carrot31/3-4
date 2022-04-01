import React from "react";
import styled from 'styled-components';
import './App.css';

import { useHistory, useParams } from "react-router-dom";

const Detail = (props) => {
    // console.log(props);
    const history = useHistory();
    const { id } = useParams();
    const text = React.useRef(null);

    const [list, setList] = React.useState(['"내일도 화이팅!"'])
    // console.log(list)

    const addList = () => {
        setList([...list, text.current.value])
    }

    const [grade, setGrade] = React.useState(0);



    React.useEffect(() => {

        const press = (e) => {

            if ([0, 1, 2].indexOf(parseInt(e.key)) !== -1) {
                setGrade(parseInt(e.key));
                alert('내일은 행복한 하루가 되길:)')
            } else if ([3].indexOf(parseInt(e.key)) !== -1) {
                setGrade(parseInt(e.key));
                alert('내일은 더 즐거울 거에요:)')
            } else if ([4, 5].indexOf(parseInt(e.key)) !== -1) {
                setGrade(parseInt(e.key));
                alert('내일도 즐거운 하루가 되길;)')
            }

        };
        window.addEventListener("keydown", press);


        return () => window.removeEventListener("keydown", press);
    }, []);

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
                            onClick={() => { setGrade(idx + 1); }}
                        />
                    );
                })}
            </CircleBox>

            <Button onClick={() => { history.goBack(); }}>
                평점 남기기
            </Button>

            <MsgBox>
                <MsgList>
                    {list.map((list, i) => {
                        return (
                            <Msg className='msglist' key={i}>
                                {list}
                            </Msg>
                        )
                    })}
                </MsgList>

                <InputBox>
                    <Input ref={text} type='text' placeholder='오늘을 표현해보세요!' onChange={() => console.log(text.current.value)} />
                    <TextBtn onClick={addList}>
                        입력
                    </TextBtn>
                </InputBox>
            </MsgBox>

        </Container>

    );
}
const Container = styled.div`
  margin: 30px auto 20px auto;
  padding: 20px 0px;
  text-align: center;
  font-size: 20px;
  font-family: 'OTJalollineunharuRA';
  span{
      padding: 14px 10px 8px 10px;
      border-radius: 5px;
      color: white;
      background: lightblue; 
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
    max-width: 350px;
    width: 60%;
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
    background: ${props => props.grade < props.idx + 1 ? "#ddd" : "pink"};
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
        background: ${props => props.grade < props.idx + 1 ? "#ddd" : "pink"};
    }
    &::after{
        content:'';
        width: 20px;
        height: 20px;  
        position: absolute;
        border-radius:50%;
        background: ${props => props.grade < props.idx + 1 ? "#ddd" : "pink"};
    }
`;
const MsgBox = styled.div`
    max-width: 300px;
    height: 300px;
    background: #F2F3F4  ;
    box-shadow: 0px 0px 10px 0px #ddd;
    margin: 50px auto;
    border-radius: 10px;
`;
const MsgList = styled.div`
    display: inline-block;
    width: 250px;
    height: 200px;
    margin: 15px;
    padding: 0px;
`;
const Msg = styled.div`
    padding: 10px;
    margin: 3px;
    border-radius: 5px;
`;
const InputBox = styled.div`
    width: 250px;
    height: 60px;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
const Input = styled.input`
    width: 70%;
    height: 30px;
    padding: 5px;
    border: 1px solid gray;
    border-radius: 10px;
`;
const TextBtn = styled.button`
    width: 50px;
    height: 42px;
    padding-top: 5px;
    border: 0px;
    border-radius: 10px;
    background: #F4E988;
    color: white;
    font-family: 'OTJalollineunharuRA';
    cursor: pointer;
    &:hover{
        box-shadow: 0px 0px 5px 0px gray;
    }
`;
export default Detail;
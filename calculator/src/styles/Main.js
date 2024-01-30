import styled from "styled-components";

export const Container = styled.div`
  display:grid;
  justify-content:center;
  align-content: center;
  width: 400px;
  min-height: 500px;
  margin: 40px auto;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: minmax(120px, auto) repeat(5, 100px);
  box-shadow: 2px 2px 10px aqua;
  border-radius: 9px;
`;

export const Screen = styled.div`
  grid-column: 1/-1;
  background-color: rgba(60, 64, 67, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  word-wrap: break-word;
  word-break: break-all;
  text-align: right;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Previous = styled.div`
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.5rem;
`;

export const Current = styled.div`
  color: white;
  font-size: 2.5rem;
`;

export const Button = styled.button`
    cursor:pointer;
    font-size:2rem;
    utline:none;
    border:1px outset white;
    background-color:rgba(255,255,255,0.75);
    &:hover{
        background-color:rgba(255,255,255,0.9);
    }
    ${function({gridSpan}){
        if(gridSpan){
            return `grid-column:span ${gridSpan}`
        }
    }};
    ${({operation})=>
        operation && `background-color:#e5dfda`
    };
    ${({deleteKey})=>
    deleteKey && `background-color:red;opacity:0.4`
    };
    ${({equals})=>
    equals && `background-color:gray;border-bottom-right-radius:9px`
    };
    ${({decimal})=>
    decimal && `border-bottom-left-radius:9px`
    };
`;
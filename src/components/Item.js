import React from "react"
import styled from "styled-components"

const Item = (props) => {
    const [testC, setTestC] = React.useState(false)
    const toggleChange = React.useCallback(() => setTestC((prev) => !prev), [setTestC])//clickしたら切替のみ機能

    const ItemWrapper = styled.li`

        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 1.4rem;
        border-radius: 5px;
        background-color: white;
        line-height: 2.6rem;
        margin-top: 10px;
        & p {
            width: 65%;
            text-align: left;
        }
        & button {
            width: 50px;
            height: 30px;
            font-weight: bold;
            margin: 0 5px;
            border-radius: 5px;
            outline: none;
            border: none;
            cursor: pointer;
            transition: all 0.1s;
            background-color: #F7EFE2;
            &:active {
                transform: translateY(1px);
                color: red;
                font-size: 0.75rem;
            }
        }
    `

    return (

        <ItemWrapper>
            <p>{props.todo.content}</p>
            <button>編集</button>
            <button onClick={toggleChange}>{testC ? "完了" : "未完了" }</button>
            <button>削除</button>
        </ItemWrapper>
    )
}

export default Item
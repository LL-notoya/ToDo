import React from "react"
import styled from "styled-components"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import DeleteIcon from '@material-ui/icons/Delete';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';



const Item = (props) => {
    const [isDone, setIsDone] = React.useState(false)
    // /*const toggleChange = React.useCallback(() => setTestC((prev) => !prev), [setTestC])//clickしたら切替のみ機能

    const ItemWrapper = styled.li`

        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 1.4rem;
        border-radius: 5px;
        background-color: white;
        line-height: 2.6rem;
        margin-top: 10px;
        height: 60px;
        & p {
            width: 63%;
            text-align: left;
        }
        & button {
            width: 50px;
            height: 45px;
            margin: 0 5px;
            padding: 0;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.1s;
            box-shadow: 0 2px 4px -1px;
            &:active {
            transform: translateY(2px);
            font-size: 0.86rem;
            box-shadow: none;
            color: red;
            }
        }
    `

    return (

        <ItemWrapper>
            <p>{props.todo.content}</p>
            <IconButton><ImportContactsIcon /></IconButton>
            <Button
                variant="contained"
                color={isDone ? "secondary" : "default"}
                onClick={() => setIsDone(!isDone)}>{isDone ? "済" : "未完了"}</Button>
            <IconButton onClick={() => props.deleteTodo(props.id)}><DeleteIcon /></IconButton>

        </ItemWrapper>
    )
}

export default Item
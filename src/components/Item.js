import React from "react"
import styled from "styled-components"

import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import DeleteIcon from '@material-ui/icons/Delete';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import TextField from '@material-ui/core/TextField';
import SaveIcon from "@material-ui/icons/Save";
import ListItemText from '@material-ui/core/ListItemText'



const ItemWrapper = styled.li`
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 1.4rem;
        line-height: 2.6rem;
        margin-top: 10px;
    & button {
        width: 50px;
        height: 45px;
        margin: 0 5px;
        padding: 0;
        font-weight: 600;
        cursor: pointer;
        border-radius: 40px;
        transition: all 0.1s;
        box-shadow: 0 2px 4px -1px;
        &:active {
            transform: translateY(2px);
            font-size: 0.86rem;
            box-shadow: none;
        }
    }
`;


const Item = (props) => {
    const [isEdit, setIsEdit] = React.useState(false)//編集画面　表示非表示
    // /*const toggleChange = React.useCallback(() => setTestC((prev) => !prev), [setTestC])//clickしたら切替のみ機能

    const buttonText = props.isDone ? "済" : "未完了"

    const contentText = () => {
        if (isEdit) {
            const handleClick = () => {//書き換え保存
                const input = document.getElementById('update-input')
                props.updateTodo(props.id, input.value)
                setIsEdit(false)
            }
            return (//isEdit(true)表示
                <>
                    <TextField
                        id="update-input"
                        label={props.content}
                        variant="outlined"
                        style={{
                            width: "100%",
                            marginRight: 5,
                            backgroundColor:"lightgrey"
                        }} />
                    <Button
                        type="button"
                        color="primary"
                        variant="contained"
                        onClick={handleClick}
                    >
                        <SaveIcon />{/*保存 */}
                    </Button>
                </>
            )
        } else {//isEdit(false)通常時
            return (
                <>
                    <ListItemText
                        primary={props.content}
                            style={{
                                borderRadius: 10,
                                backgroundColor: "white",
                                height: 50,
                                textAlign: "left",
                                paddingLeft: 10
                            }}
                    />
                    <IconButton
                        type="button"
                        aria-label="delete"
                        style={{
                            marginLeft: 10
                        }}
                        onClick={() => setIsEdit(true)}
                    >
                        <ImportContactsIcon />
                    </IconButton>
                </>
            );
        }
    }


    return (
        <>
            <ItemWrapper>
                {contentText()}
                <Button
                    variant="contained"
                    color={props.isDone ? "secondary" : "default"}
                    style={{ display: isEdit ? "none" : "block", fontSize: 14 }}//isEdit編集がtrueで消えるfalseで表示
                    onClick={() => props.toggleIsDone(props.id)}
                >
                    {buttonText}
                </Button>
                <IconButton onClick={() => props.deleteTodo(props.id)}>
                    <DeleteIcon />
                </IconButton>
            </ItemWrapper>
        </>
    );
}
export default Item
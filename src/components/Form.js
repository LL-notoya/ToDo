import React from "react"
import styled from "styled-components"

const FormWrapper = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    input {
        width: 400px;
        height: 35px;
        font-size: 1.4rem;
        border-radius: 15px;
        border: none;
        outline: none;
        text-align: center;
        box-shadow: 0 0 0 2px;
    }
    button {
        width: 45px;
        height: 40px;
        font-weight: bold;
        margin-left: 5px;
        border-radius: 20px;
        outline: none;
        border: none;
        cursor: pointer;
        box-shadow: 0 0 0 2px;
        transition: all 0.1s;
        &:active {
            transform: translateY(3px);
            box-shadow: none;
            color: red;
            font-size: 0.9rem;
        }
    }
`


const Form = () => {
    return (
        <form>
            <FormWrapper>
                <input type="text" placeholder="今日は何するの？" />
                <button type="button">追加</button>
            </FormWrapper>
        </form>
    )
}

export default Form
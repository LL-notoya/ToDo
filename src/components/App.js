import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

import Form from "./Form"
import List from "./List"
// import "../styles/App.css"

const AppWrapper = styled.div`
    text-align: center;
    background-color: #D0E1F9;  /*目に優しい　ブルーベリー色 */
    height: 100vh;
    font-family: 'Lato', 'Noto Sans JP', 'ヒラギノ角ゴ ProN', 'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;/*googleのlatoフォント　シンプルでお洒落 今年流行りそう*/
    h1 {
        font-size: 35px;
        font-weight: bold;
        padding-top: 50px;
        letter-spacing: 0.1rem;
    }
`

const GlodalStyle = createGlobalStyle`
    /* ここに全体に適用させたいcssを書く*/
    ${reset} /* resetcss */
`

const App = () => {
    const todoItems = [
        { id: 1, content: "朝起きて" },
        { id: 2, content: "昼寝して" },
        { id: 3, content: "夜寝た" }
    ]


    return (
        <>
        <GlodalStyle />
            <AppWrapper>
                <h1 >My ToDo List</h1>
                <Form />
                <List todoItems={todoItems} />
            </AppWrapper>
        </>
    )
}

export default App


import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import Form from "./Form";
import List from "./List";




const AppWrapper = styled.div`
  text-align: center;
  background-color: #d0e1f9; /*目に優しい　ブルーベリー色 */
  height: 100vh;
  font-family: "Lato", "Noto Sans JP", "ヒラギノ角ゴ ProN",
    "Hiragino Kaku Gothic ProN", "メイリオ", Meiryo, "ＭＳ Ｐゴシック",
    "MS PGothic", sans-serif; /*googleのlatoフォント　シンプルでお洒落 今年流行りそう*/
  h1 {
    font-size: 35px;
    font-weight: bold;
    padding-top: 50px;
    letter-spacing: 0.1rem;
  }
`;

const GlodalStyle = createGlobalStyle`
    /* ここに全体に適用させたいcssを書く*/
    ${reset} /* resetcss */
    /*　共通するスタイルはglobalStyleとしてまとめる 記述が多くなるなら別フォルダ、ファイル作成*/
    button {
        width: 45px;
        height: 40px;
        font-weight: bold;
        margin-left: 5px;
        border-radius: 20px;
        outline: none;
        border: none;
        cursor: pointer;
        box-shadow: 0 2px 4px -1px;
        transition: all 0.1s;
        &:active {
            transform: translateY(2px);
            font-size: 0.86rem;
            box-shadow: none;
            color: red;
        }
    }
`;

const App = () => {

const [todos, setTodos] = React.useState([
//書き換える必要があるstateでかんり
    { id: 1, content: "朝起きて" },
    { id: 2, content: "昼寝して" },
    { id: 3, content: "夜寝た" }

])

    const addTodo = (inputText) => {
        const generateId = () => {
            const newId = Math.ceil(Math.random() * 100)
            const duplicateId = todos.find(todo => todo.id === newId)
            if (duplicateId === undefined) {
                return newId
            } else {
                return generateId()
            }
        }
        //新しいtodoオブジェクト作る
        const newTodo = {
            id: generateId(),
            content: inputText //入力された値
        }
        console.log(newTodo)
        //新しいtodoオブジェクトList追加
        setTodos(todos.concat(newTodo)) //セット 書き換えている(concat = 一度消去してから書き換える)
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))//falseなので取り除かれる　他はtrueなので残る id = 任意でclickするid(削除) item = 要素
    }

　return (
    <>
    　<GlodalStyle />
    　<AppWrapper>
            <h1>My ToDo List</h1>
            <Form addTodo={addTodo} />
            <List todos={todos} deleteTodo={deleteTodo} />
    　</AppWrapper>
    </>
　);
};

export default App;

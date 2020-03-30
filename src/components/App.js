import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import axios from 'axios'

import Form from './Form'
import List from './List'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

const AppWrapper = styled.div`
  text-align: center;
  background-color: #d0e1f9; /*目に優しい　ブルーベリー色 */
  height: 100vh;
  font-family: 'Lato', 'Noto Sans JP', 'ヒラギノ角ゴ ProN',
    'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック',
    'MS PGothic', sans-serif; /*googleのlatoフォント　シンプルでお洒落 */
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
    body {
        line-height: 0;
    }
    /*　共通するスタイルはglobalStyleとしてまとめる 記述が多くなるなら別フォルダ、ファイル作成*/
    button {
        width: 45px;
        height: 40px;
        font-weight: 600;
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
`

const App = () => {
  const [todos, setTodos] = React.useState([])
  const [checked, setChecked] = React.useState(false) //チェックボックスのチェック

  React.useEffect(() => {
    //
    axios.get('/todos').then(res => {
      setTodos(res.data) //現在の全てのオブジェクトが入っている
    })
  }, [])

  const addTodo = inputText => {
    //新しいtodoオブジェクト作る
    const newTodo = {
      content: inputText, //入力された値
      isDone: false
    }

    axios.post('/todos', newTodo).then(res => {
      const newTodos = todos.concat(res.data) //res.data クライアント側で追加したオブジェクトが入っている = newtodoと同じ
      setTodos(newTodos)
    })

    console.log(newTodo)
    //新しいtodoオブジェクトList追加
    setTodos(todos.concat(newTodo)) //セット 書き換えている(concat = 一度消去してから書き換える)
  }

  const deleteTodo = id => {
    const newTodos = todos.filter(todo => todo.id !== id) //falseなので取り除かれる　他はtrueなので残る id = 任意でclickするid(削除) todo = 要素
    const delTodo = todos.find(todo => todo.id === id) //削除したいオブジェクトを削除　id: "テスト"
    axios.delete(`/todos/${id}`, { data: delTodo }).then(() => {
      setTodos(newTodos) //削除後のnewTodosが入ってる
    })
  }

  const toggleIsDone = id => {
    //切替 未完了→完了
    let updateTodo
    const updateNewTodos = todos.map(todo => {
      if (id === todo.id) {
        todo.isDone = !todo.isDone
        updateTodo = todo
      }
      return todo
    })
    axios.put(`/todos/${id}`, updateTodo).then(() => {
      setTodos(updateNewTodos)
    })
  }

  const updateTodo = (id, newValue) => {
    //編集text書き換え
    if (newValue.length === 0) {
      //書き換え時に文字（変更）がなければ
      console.log('実行されてるかtest')
      return setTodos(todos)
    }
    const updateTodo = todos.find(todo => todo.id === id)
    updateTodo.content = newValue

    const updateNewTodos = todos.map(todo => {
      //配列書き換え保存
      if (todo.id === id) {
        return updateTodo
      } else {
        return todo
      }
    })
    axios.put(`/todos/${id}`, updateTodo).then(() => {
      setTodos(updateNewTodos)
    })
  }

  const FilterCheckbox = () => {
    //チェック
    if (todos.length === 0) {
      return
    } else {
      return (
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={() => setChecked(!checked)}
              color="primary"
            />
          }
          label="未完了のみ表示"
          style={{ marginRight: 27 }}
        />
      )
    }
  }
  // console.log(FilterCheckbox());

  const FilterCheckTodo = () => {
    //チェック後 配列
    if (checked) {
      const notDoneTodos = todos.map(todo => (todo.isDone ? null : todo)) //完了は非表示
      return notDoneTodos.filter(todo => todo) //nullを覗く
    } else {
      return todos
    }
  }
  console.log(FilterCheckTodo())

  return (
    <>
      　 <GlodalStyle />　
      <AppWrapper>
        <h1>My ToDo List</h1>
        <Form addTodo={addTodo} />
        {FilterCheckbox()}
        <List
          todos={FilterCheckTodo()}
          deleteTodo={deleteTodo}
          toggleIsDone={toggleIsDone}
          updateTodo={updateTodo}
        />
      </AppWrapper>
    </>
  )
}

export default App

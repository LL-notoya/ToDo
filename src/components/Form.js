import React from 'react'
import styled from 'styled-components'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'

const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  input {
    width: 400px;
    height: 35px;
    font-size: 1.3rem;
    margin-left: 30px;
    outline: none;
    text-align: center;
  }
  button {
    margin-left: 10px;
  }
`

const Form = props => {
  const handleClick = e => {
    // e → clickされたら動く
    e.preventDefault() //タグの挙動を止める submit=リロード抑止
    let input = document.getElementsByTagName('input')[0]

    if (input.value.length === 0) {
      return null
    } else {
      props.addTodo(input.value) //直接入力した値
      input.value = '' //追加　　入力完了した文字を消す(初期化)
    }
  }

  return (
    <>
      <FormWrapper>
        <Input
          inputProps={{ 'aria-label': 'description' }}
          type="text"
          placeholder="Today Todo？"
        />
        <Button type="submit" onClick={e => handleClick(e)}>
          追加
        </Button>
      </FormWrapper>
    </>
  )
}

export default Form

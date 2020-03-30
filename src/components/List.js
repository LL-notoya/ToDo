import React from "react"
import styled from "styled-components"

import Item from "./Item"


const ListWrapper = styled.ul`
    width: 700px;
    margin: 30px auto;
`

const List = (props) => {

    return (
      <ListWrapper>
        {props.todos.map((todo) => (
          <Item
            todo={todo}
            key={todo.id}
            id={todo.id}
            isDone={todo.isDone}
            content={todo.content}
            deleteTodo={props.deleteTodo}
            toggleIsDone={props.toggleIsDone}
            updateTodo={props.updateTodo}
          />
        ))}
      </ListWrapper>
    );
}

export default List
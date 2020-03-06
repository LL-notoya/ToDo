import React from "react"
import styled from "styled-components"

import Item from "./Item"


const ListWrapper = styled.ul`
    width: 550px;
    margin: 30px auto;
`

const List = (props) => {

    return (

        <ListWrapper>
            <ul>
                {props.todoItems.map((todo) =>
                    <Item
                        todo={todo}
                        key={todo.id}
                    />
                )}
            </ul>
        </ListWrapper>
    )
}

export default List
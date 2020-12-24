import React, { useCallback, useState } from 'react'
// import { TodosProvider } from '../contexts/todos'
import { TextField, Button } from '@material-ui/core'
import styled from 'styled-components'


const Input = styled(TextField)`
  && {
    margin: 5px;
  }
`
const AddButton = styled(Button)`
  && {
    margin: 5px;
  }
`

const Form = () => {
    // const { add } = useContext(TodosContext)
    const [input, setInput] = useState('')
    const addTodo = useCallback(
    () => {
    //   add(input)
      setInput('')
    },
    [input]
  )

    return (
        <div>
            <Input
                id="add-todo"
                label="Todo Name"
                placeholder="Enter new todo"
                value={input}
                onChange={e => setInput(e.target.value)}
                fullWidth
            />
            <AddButton color="primary" onClick={addTodo}>
                Add
            </AddButton>
        </div>
    )
}

export default Form

import { useState } from 'react'

function Contect() {

    const [input, setInput] = useState('')
    const [todo, setTodo] = useState([])

    return (
        <>
            <h1>할일 목록</h1>
            <input
                type="text"
                value={input}
                placeholder='새 할일'
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={() => setTodo([...todo, input])}>추가</button>

            {todo.map((item, i) => (
                <div key={i}>
                    <input type="checkbox" />{item}
                    <button>삭제</button>
                </div>
            ))}

        </>
    )
}

export default Contect
import { useState } from 'react'

function Calculator() {

    const [num1, setNum1] = useState(10)
    const [num2, setNum2] = useState(5)

    return (
        <>
            <h1>간단한 계산기</h1>
            <p>숫자 1:
                <input
                    type="number"
                    value={num1}
                    onChange={(e) => setNum1(Number(e.target.value))}
                />
            </p>

            <p>숫자 2:
                <input
                    type="number"
                    value={num2}
                    onChange={(e) => setNum2(Number(e.target.value))}
                />
            </p>

            <p>덧셈: {num1} + {num2} = {num1 + num2}</p>
            <p>뻴셈: {num1} - {num2} = {num1 - num2}</p>
            <p>곱셈: {num1} x {num2} = {(num1 * num2).toFixed(2)}</p>
            <p>나눗셈: {num1} ÷ {num2} = {(num1 / num2).toFixed(2)}</p>
        </>
    )
}

export default Calculator
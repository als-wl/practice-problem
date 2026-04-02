import React, { useState } from 'react'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [ischecked, setIsChecked] = useState(false)

    const input = username !== "" && password !== "";

    return (
        <>
            <h1>로그인 폼</h1>
            <p>사용자명:
                <input
                    type="text"
                    value={username}
                    placeholder='사용자명'
                    onChange={(e) => setUsername(e.target.value)}
                />
            </p>

            <p>비밀번호:
                <input
                    type="password"
                    value={password}
                    placeholder='비밀번호'
                    onChange={(e) => setPassword(e.target.value)}
                />
            </p>

            <input
                type="checkbox"
                id='chk'
                checked={ischecked}
                onChange={(e) => setIsChecked(e.target.checked)}
            />
            <label htmlFor="chk">로그인 상태 유지</label>
            <br />
            <button
                disabled={!input}
                onClick={() => alert(
                    `로그인 시도
            사용자: ${username}
            기억하기: ${chk ? '예' : '아니요'}`)}>로그인</button>
        </>
    )
}

export default Login
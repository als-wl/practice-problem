import { useState } from 'react'

function Item() {

    const [fruit, setFruit] = useState('')
    const handleFruitChange = (value) => {
        setFruit(value);
    }

    return (
        <>
            <h1>아이템 선택</h1>
            <button onClick={() => handleFruitChange('사과')}>사과</button>
            <button onClick={() => handleFruitChange('바나나')}>바나나</button>
            <button onClick={() => handleFruitChange('오렌지')}>오렌지</button>
            <button onClick={() => handleFruitChange('포도')}>포도</button>
            <button onClick={() => handleFruitChange('딸기')}>딸기</button>

            <p>선택한 과일: {fruit === "" ? "없음" : fruit}</p>
            {fruit !== "" && (<p>🎉{fruit}를 선택하셨습니다!</p>)}
        </>
    )
}

export default Item
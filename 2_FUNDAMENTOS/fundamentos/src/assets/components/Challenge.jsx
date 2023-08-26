const Challege = () => {
    const v1 = 10
    const v2 = 25

    return (
        <div>
            <p>A : {v1}</p>
            <p>B : {v2}</p>
            <button onClick={ () => console.log(v1 + v2)}>Clique para somar os 2 valores</button>
        </div>
    )
}

export default Challege
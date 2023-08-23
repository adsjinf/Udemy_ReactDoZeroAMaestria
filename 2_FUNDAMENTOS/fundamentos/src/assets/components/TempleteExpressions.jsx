const TemplateExpressions = () => {
    const name = "José Ismael";
    const data = {
        age: 31, 
        job: "Programmer"
    }
    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você Atual como: {data.job}</p>
            <p>{4 +4}</p>
            <p>{console.log("JSX React")}</p>
        </div>
    );
};

export default TemplateExpressions;
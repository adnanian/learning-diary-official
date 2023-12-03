import { useState, useEffect} from "react";

function Home() {
    useEffect(() => {
        fetch('http://localhost:3000/reflectionQuestions')
            .then((response) => response.json())
            .then((data) => setReflectionQuestions(data));
    }, []);


    const [reflectionQuestions, setReflectionQuestions] = useState([]);

    function addReflectionQuestion(newReflection) {
        setReflectionQuestions([...reflectionQuestions, newReflection]);
        console.log(`Reflection question #${newReflection.id} successfully added to the server!`);
    }

    return (
        <div>
            <h1>Hi, I'm John!</h1>
        </div>
    );
}

export default Home;
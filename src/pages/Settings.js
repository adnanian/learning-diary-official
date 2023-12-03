import { useState } from "react";

function Settings( {reflectionQuestions, onAddReflection} ) {
    const [prompt, setPrompt] = useState("");
    const [type, setType] = useState("open");

    const reflectionBlocks = reflectionQuestions.map((reflection) => {
        return (
            <li key={reflection.id}>{reflection.prompt}</li>
        );
    });

    function handleFormSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:3000/reflectionQuestions', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                prompt: prompt,
                type: type
            })
        })
            .then((response) => response.json())
            .then((data) => onAddReflection(data));
    }

    return (
        <div>
            <ul>
                {reflectionBlocks}
            </ul>
            <form onSubmit={handleFormSubmit}>
                <label for="reflection">New reflection</label>
                <input
                    id="reflection"
                    type="text"
                    name="reflection"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                />
                <select defaultValue={"open"} onChange={(e) => setType(e.target.value)}>
                    <option value="open" selected>Open Question</option>
                    <option value="yes-or-no">Yes or No Question</option>
                    <option value="task">Task</option>
                </select>
                <input type="submit" />
            </form>
        </div>
    );
}

export default Settings;
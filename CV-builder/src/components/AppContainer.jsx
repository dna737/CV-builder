import ResumeForm from "./ResumeForm.jsx";
import { Preview } from "./Preview.jsx";
import { useState } from "react";

function AppContainer() {
    const [name, setName] = useState("something");

    function changeInput(event) {
        setName(event.target.value);
    }

    return (
        <>
            <ResumeForm name={name} changeInput={changeInput}></ResumeForm>
            <Preview name={name}></Preview>
        </>
    );
}

export { AppContainer };

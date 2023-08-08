import { useState } from "react";

export default function ResumeForm({ name, changeInput }) {
    const [info, setInfo] = useState({
        name: { firstName: "John", lastName: "Doe" },
        contact: "+1 (123)456-789",
        emailAddress: "john.doe@gmail.com",
        linkedin: "linkedin.com/in/johnDoe",
        github: "github.com/johnDoe",
    });
    return <div className="w-10 h-9 bg-yellow-400 flex-grow"></div>;
}

function PersonalInfo({ name, contact, emailAddress, linkedin, github }) {}

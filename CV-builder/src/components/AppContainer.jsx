import ResumeForm from "./ResumeForm.jsx";
import { Preview } from "./Preview.jsx";
import { useImmer } from "use-immer";
import { v4 } from "uuid";
function AppContainer() {
    const [info, setInfo] = useImmer({
        name: "John Doe",
        contact: "+1 (123)456-789",
        email: "john.doe@gmail.com",
        github: "github.com/johnDoe",
    });

    const [education, setEducation] = useImmer({
        name: "FooBaz school of Bar",
        location: "City, State",
        gradDate: "May, 1900",
        gpa: "x.0/y.0",
    });

    const [experience, setExperience] = useImmer({
        name: "Walt Disney",
        title: "Salary Negotiator",
        responsibilities: [
            { title: "Negotiated for money", id: v4() },
            {
                title: "Spent money on courses that taught me how to negotiate money",
                id: v4(),
            },
            {
                title: "Used the extra money to learn how to work for github.com/dna737 😎",
                id: v4(),
            },
        ],
        date: "May 2019 - Present",
    });

    function changePersonalInfo(attribute, value) {
        setInfo((info) => {
            info[attribute] = value;
        });
    }

    function changeEducationInfo(attribute, value) {
        setEducation((education) => {
            education[attribute] = value;
        });
    }

    function changeExperienceInfo(attribute, value) {
        if (attribute.includes("responsibility")) {
            setExperience((experience) => {
                experience.responsibilities[attribute.split("-")[1]].title =
                    value;
            });
        }
        setExperience((experience) => {
            experience[attribute] = value;
        });
    }

    return (
        <>
            <ResumeForm
                personalInfo={info}
                changePersonalInput={changePersonalInfo}
                education={education}
                changeEducationInput={changeEducationInfo}
                experience={experience}
                changeExperienceInput={changeExperienceInfo}
            ></ResumeForm>
            <Preview
                personalInfo={info}
                educationInfo={education}
                experienceInfo={experience}
            ></Preview>
        </>
    );
}

export { AppContainer };

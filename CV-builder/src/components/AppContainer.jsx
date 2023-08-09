import ResumeForm from "./ResumeForm.jsx";
import { Preview } from "./Preview.jsx";
import { useImmer } from "use-immer";
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
        gpa: { numerator: "x.0", denominator: "y.0" },
    });

    const [experience, setExperience] = useImmer({
        0: {
            name: "Walt Disney",
            title: "Salary Negotiator",
            responsibilities: [
                "Negotiated for money",
                "Spent money on courses that taught me how to negotiate money",
                "Used the extra money and gave it away to TOP",
            ],
        },
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
            <Preview personalInfo={info}></Preview>
        </>
    );
}

export { AppContainer };

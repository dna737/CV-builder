/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export default function ResumeForm({
    personalInfo,
    changePersonalInput,
    education,
    changeEducationInput,
    experience,
    changeExperienceInput,
}) {
    return (
        <div className=" w-1/2 h-full bg-red-500 p-2.5 rounded-md">
            <PersonInfoAndSocials
                personalInfo={personalInfo}
                changePersonalInput={changePersonalInput}
            />
            <Education
                educationInfo={education}
                changeEducationInput={changeEducationInput}
            />
            <Experience
                experienceInfo={experience}
                changeExperienceInput={changeExperienceInput}
            />
        </div>
    );
}

function PersonInfoAndSocials(props) {
    return (
        <>
            <h1>Personal Info && Socials:</h1>
            <form className="bg-yellow-400 p-3">
                <div className="grid md:grid-cols-2 md:gap-x-3">
                    <PersonalField {...props} attribute={"name"} />
                    <PersonalField {...props} attribute={"contact"} />
                    <PersonalField {...props} attribute={"email"} />
                    <PersonalField {...props} attribute={"github"} />
                </div>
            </form>
        </>
    );
}

function PersonalField({ personalInfo, changePersonalInput, attribute }) {
    let type = getTypeOfInput(attribute);
    return (
        <div className="mb-1.5">
            <div className="first-name-field flex flex-col">
                <label htmlFor={attribute}>{attribute}</label>
                <input
                    type={type}
                    value={personalInfo[attribute]}
                    id={attribute}
                    onChange={(e) => {
                        changePersonalInput(attribute, e.target.value);
                    }}
                ></input>
            </div>
        </div>
    );
}
function getTypeOfInput(attribute) {
    let type = null;
    switch (attribute) {
        case "contact":
            type = "tel";
            break;
        case "email":
            type = "email";
            break;
        default:
            type = "text";
            break;
    }

    return type;
}

//TODO: remove the grid feauture in the Education form
function Education(props) {
    return (
        <>
            <h1>Education:</h1>
            <form className="bg-yellow-400 p-3">
                <div className="grid md:grid-cols-2 md:gap-x-3">
                    <EducationField {...props} attribute={"name"} />

                    <EducationField {...props} attribute={"location"} />

                    <EducationField {...props} attribute={"gpa"} />
                    <EducationField {...props} attribute={"gradDate"} />
                </div>
            </form>
        </>
    );
}

function EducationField({ educationInfo, changeEducationInput, attribute }) {
    return (
        <div>
            <div className="mb-1.5">
                <div className="first-name-field flex flex-col">
                    <label htmlFor={attribute}>{attribute}</label>
                    <input
                        value={educationInfo[attribute]}
                        id={attribute}
                        onChange={(e) => {
                            changeEducationInput(attribute, e.target.value);
                        }}
                    ></input>
                </div>
            </div>
        </div>
    );
}

function Experience(props) {
    return (
        <>
            <h1>Experience:</h1>
            <form className="bg-yellow-400 p-3">
                <div className="grid md:grid-cols-2 md:gap-x-3">
                    <ExperienceField {...props} attribute={"name"} />

                    <ExperienceField {...props} attribute={"title"} />
                </div>
                <ExperienceField {...props} attribute={"date"} />

                <ExperienceField {...props} attribute={"responsibilities"} />
            </form>
        </>
    );
}

function ExperienceField({ experienceInfo, changeExperienceInput, attribute }) {
    //hi there
    let value = getExperienceInputValue(experienceInfo, attribute);

    return (
        <div>
            <div className="mb-1.5">
                <div className="first-name-field flex flex-col">
                    <label htmlFor={attribute}>{attribute}</label>
                    <input
                        value={experienceInfo[attribute]}
                        id={attribute}
                        onChange={(e) => {
                            changeExperienceInput(attribute, e.target.value);
                        }}
                    ></input>
                </div>
            </div>
        </div>
    );
}

function getExperienceInputValue(experienceInfo, attribute) {
    return attribute !== "";
}

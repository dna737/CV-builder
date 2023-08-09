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
        <div className=" w-1/2 min-w-{50%} h-full bg-red-500 p-2.5 rounded-md">
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
                changeExperienceInput={changeEducationInput}
            />
            ;
        </div>
    );
}

function PersonInfoAndSocials(props) {
    return (
        <>
            <h1>Personal Info && Socials:</h1>
            <form className="bg-yellow-400 p-3">
                <div className="grid md:grid-cols-2 md:gap-6">
                    <PersonalField {...props} attribute={"name"} />
                    <PersonalField {...props} attribute={"contact"} />
                    <PersonalField {...props} attribute={"email"} />
                    <PersonalField {...props} attribute={"github"} />
                </div>
            </form>
        </>
    );
}

function Education(props) {
    return <></>;
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

function Experience(props) {
    return <></>;
}

function PersonalField({ personalInfo, changePersonalInput, attribute }) {
    let type = getTypeOfInput(attribute);
    return (
        <div className="mb-6">
            <div className="first-name-field flex flex-col">
                <label htmlFor={attribute + (attribute === "github" && "ID")}>
                    {attribute}
                </label>
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

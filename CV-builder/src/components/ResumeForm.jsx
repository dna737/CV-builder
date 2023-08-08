/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export default function ResumeForm(props) {
    return (
        <div className=" w-1/2 min-w-{50%} h-full bg-red-500 p-2.5 rounded-md">
            <h1>Personal Info && Socials:</h1>
            <form className="bg-yellow-400 p-3">
                <div className="grid md:grid-cols-2 md:gap-6">
                    <Field {...props} attribute={"name"} />
                    <Field {...props} attribute={"contact"} />
                    <Field {...props} attribute={"email"} />
                    <Field {...props} attribute={"github"} />
                </div>
            </form>
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

function Field({ personalInfo, changeInput, attribute }) {
    let type = getTypeOfInput(attribute);

    return (
        <div className="mb-6">
            <div className="first-name-field flex flex-col">
                <label htmlFor={attribute}>{attribute}</label>
                <input
                    type={type}
                    value={personalInfo[attribute]}
                    id={attribute}
                    onChange={(e) => {
                        changeInput(attribute, e.target.value);
                    }}
                ></input>
            </div>
        </div>
    );
}

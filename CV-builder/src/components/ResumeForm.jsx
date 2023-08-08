/* eslint-disable react/prop-types */
export default function ResumeForm({ personalInfo, changeInput }) {
    return (
        <div className="h-full bg-red-500 p-2.5 rounded-md">
            <h1>Personal Info && Socials:</h1>
            <form>
                <Name
                    personalInfo={personalInfo}
                    changeInput={changeInput}
                    attribute={"name"}
                ></Name>
            </form>
        </div>
    );
}

function Name({ personalInfo, changeInput, attribute }) {
    return (
        <div className="mb-6">
            <div className="first-name-field flex flex-col">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    value={personalInfo.name}
                    id="name"
                    onChange={(e) => {
                        changeInput(attribute, e.target.value);
                    }}
                ></input>
            </div>
        </div>
    );
}

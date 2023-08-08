/* eslint-disable react/prop-types */
export default function ResumeForm({ personalInfo, changeInput }) {
    return (
        <div className=" w-1/2 min-w-{50%} h-full bg-red-500 p-2.5 rounded-md">
            <h1>Personal Info && Socials:</h1>
            <form className="bg-yellow-400 p-3">
                <div className="grid md:grid-cols-2 md:gap-6">
                    <Name
                        personalInfo={personalInfo}
                        changeInput={changeInput}
                        attribute={"name"}
                    ></Name>
                </div>
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

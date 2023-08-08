/* eslint-disable react/prop-types */
export default function ResumeForm({ personalInfo, changeInput }) {
    return (
        <form>
            <Name
                personalInfo={personalInfo}
                changeInput={changeInput}
                attribute={"name"}
            ></Name>
        </form>
    );
}

function Name({ personalInfo, changeInput, attribute }) {
    return (
        <div className="mb-6">
            <input
                type="text"
                value={personalInfo.name}
                id="name"
                onChange={(e) => {
                    changeInput(attribute, e.target.value);
                }}
            ></input>
        </div>
    );
}

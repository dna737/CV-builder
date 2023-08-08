/* eslint-disable react/prop-types */
function Preview({ personalInfo }) {
    return (
        <div className="h-3.5 w-1/2">
            <h2>{personalInfo.name}</h2>
        </div>
    );
}

export { Preview };

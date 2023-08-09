/* eslint-disable react/prop-types */
function Preview({ personalInfo }) {
    //TODO: Display the result of the rest of the fields.
    return (
        <>
            <div className="p-2 h-full w-1/2 bg-gray-400">
                <div className="text-center text-3xl font-bold">
                    <h2>{personalInfo.name}</h2>
                </div>
                <div className="flex flex-nowrap ">
                    <div className="flex-grow underline flex-shrink-0 justify-center flex  ">
                        {personalInfo.contact}
                    </div>
                    <div className="w-1 h-full">|</div>
                    <div className="flex flex-grow underline flex-shrink-0 justify-center ">
                        {personalInfo.email}
                    </div>
                    <div className="w-1 h-full">|</div>
                    <div className="flex  flex-grow underline flex-shrink-0 justify-center ">
                        {personalInfo.github}
                    </div>
                </div>
            </div>
        </>
    );
}

export { Preview };

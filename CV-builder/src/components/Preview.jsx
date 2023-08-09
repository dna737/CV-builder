import { v4 as uuidv4 } from "uuid";

/* eslint-disable react/prop-types */
function Preview({ personalInfo, educationInfo, experienceInfo }) {
    //TODO: Display the result of the rest of the fields.
    return (
        <div className="p-2 h-full w-1/2 bg-gray-400">
            <PreviewPersonalInfo personalInfo={personalInfo} />
            <PreviewEducationInfo educationInfo={educationInfo} />
            <PreviewExperienceInfo experienceInfo={experienceInfo} />
        </div>
    );
}

function PreviewPersonalInfo({ personalInfo }) {
    return (
        <>
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
        </>
    );
}

function PreviewEducationInfo({ educationInfo }) {
    return (
        <div className="education-section my-5 text-2xl font-semibold">
            EDUCATION
            <hr className="border-black "></hr>
            <div className="my-2.5 grid md:grid-cols-2 gap-x-10 gap-y-2.5">
                <div>{educationInfo.name}</div>
                <div className="font-normal text-right">
                    {educationInfo.location}
                </div>
                <div>
                    <li className="font-normal">GPA: {educationInfo.gpa}</li>
                </div>
                <div className="text-right font-light italic">
                    {educationInfo.gradDate}
                </div>
            </div>
        </div>
    );
}

function PreviewExperienceInfo({ experienceInfo }) {
    console.log("experienceInfo:", experienceInfo);
    return (
        <div className="experience-section my-5 text-2xl font-semibold">
            EXPERIENCE
            <hr className="border-black"></hr>
            <div className="work-experience">
                <div className="work-extra-info my-3 flex justify-between">
                    <div>
                        <span className="text-xl">{experienceInfo.name} </span>|{" "}
                        <span className="text-lg italic font-medium">
                            {experienceInfo.title}
                        </span>
                    </div>
                    <div className="font-light italic text-lg my-1.5">
                        {experienceInfo.date}
                    </div>
                </div>
                <ul className="lists list-disc mx-5">
                    {experienceInfo.responsibilities.map((responsibility) => (
                        <li key={uuidv4()} className="text-lg font-normal">
                            {responsibility}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export { Preview };

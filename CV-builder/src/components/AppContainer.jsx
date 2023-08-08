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

    function changeInfo(attribute, value) {
        console.log("attribute:", attribute, "value", value);
        setInfo((info) => {
            info[attribute] = value;
        });
    }
    return (
        <>
            <ResumeForm
                personalInfo={info}
                changeInput={changeInfo}
            ></ResumeForm>
            <Preview personalInfo={info}></Preview>
        </>
    );
}

export { AppContainer };

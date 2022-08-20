import { ToolIcon } from "..";
import AppIcons from "../../../assets/Icons";
import Heading3 from "../../Dummy/Heading3";
import PrimaryText from "../../Dummy/PrimaryText";

const LangaugeAndTools = () => {
    return (
        <div className="flex-1 select-none p-3 ">
            <Heading3>
                {" "}
                Langauge and
                <PrimaryText> Tools</PrimaryText>{" "}
            </Heading3>

            <div className="mt-5 p-3 pl-0">
                <ul className="flex flex-wrap justify-center gap-7">
                    {AppIcons.map(({ key, path, name }) => (
                        <ToolIcon key={key} path={path} name={name} />
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default LangaugeAndTools;

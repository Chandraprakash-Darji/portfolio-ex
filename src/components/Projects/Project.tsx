import useElementOnSecreen from "../../hook/useElementOnSecreen";
import "./Project.css";
const Project = () => {
    const [isVisible, containerRef] = useElementOnSecreen();

    return (
        <section
            ref={containerRef}
            id="myprojects"
            className={`mt-5 min-h-[10rem] md:min-h-[20rem] flex justify-center items-center text-3xl md:text-7xl font-RobotoCondensed font-bold text-center transition-all duration-500 ease-linear ${
                isVisible ? "translate-x-0" : "opacity-0 translate-y-36"
            }`}
        >
            Projects Comming Soon...
        </section>
    );
};

export default Project;

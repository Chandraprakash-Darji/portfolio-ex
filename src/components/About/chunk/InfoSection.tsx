import Heading3 from "../../Dummy/Heading3";
import PrimaryText from "../../Dummy/PrimaryText";

const InfoSection = () => {
    return (
        <div className=" flex-1 text-lg md:text-xl fony-bold flex flex-col gap-6 p-3 pb-10 pl-10">
            <Heading3 extra="-left-8">
                {" "}
                Hii
                <span className="not-italic"> 👋 </span>
                I'am <PrimaryText> Chandra</PrimaryText>,{" "}
            </Heading3> 
            <p className="relative before:content-['<p>'] before:text-mainDark before:text-lg before:not-italic before:font-normal before:font-sans before:absolute before:-left-8">
                <br /> I am a self-taught Developer and a person who loves to
                learn new things. I have been working on my skills for 1 year
                now. I started with the subject
                <PrimaryText> Web Technologies</PrimaryText>, which was one of
                the most interesting subject for me.
            </p>
            <p>
                While learning the subject I was creating websites, Burger King
                clone is one of it After that, I moved on to master the HTML5,
                CSS, JavaScript, NodeJS, and React.
            </p>
            <p>
                Now I have the following skills and desire to learn more. I am
                looking forward to learn about Blockchain, Solidity, and Smart
                Contracts.
            </p>
            <p className="relative after:content-['</p>'] after:text-mainDark after:text-lg  after:font-sans after:not-italic after:font-normal after:absolute after:-left-8">
                Now I am working on making my{" "}
                <PrimaryText>portfolio </PrimaryText> better and{" "}
                <PrimaryText>freelancing</PrimaryText>. I would like to work
                with you{" "}
                <a href="#contact" className="hover:underline">
                    <PrimaryText>Contact</PrimaryText>
                </a>
                <br />
            </p>
        </div>
    );
};
export default InfoSection;

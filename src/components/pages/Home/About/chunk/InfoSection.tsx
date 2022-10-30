import Heading3 from "../../../../widget/Headings/Heading3";

const InfoSection = () => {
  return (
    <div className=" fony-bold flex flex-1 flex-col gap-6 p-3 pb-10 pl-10 text-lg md:text-xl">
      <Heading3 extra="-left-8">
        {" "}
        Hii
        <span className="not-italic"> 👋 </span>
        I'am <span className="text-primary"> Chandra</span>,{" "}
      </Heading3>
      <p className="relative before:absolute before:-left-8 before:font-sans before:text-lg before:font-normal before:not-italic before:text-base-200 before:content-['<p>']">
        <br /> I am a self-taught Developer and a person who loves to learn new
        things. I have been working on my skills for 1 year now. I started with
        the subject
        <span className="text-primary"> Web Technologies</span>, which was one
        of the most interesting subject for me.
      </p>
      <p>
        While learning the subject I was creating websites, Burger King clone is
        one of it After that, I moved on to master the HTML5, CSS, JavaScript,
        NodeJS, and React.
      </p>
      <p>
        Now I have the following skills and desire to learn more. I am looking
        forward to learn about Blockchain, Solidity, and Smart Contracts.
      </p>
      <p className="relative after:absolute after:-left-10 after:font-sans  after:text-lg after:font-normal after:not-italic after:text-base-200 after:content-['</p>']">
        Now I am working on{" "}
        <a href="https://github.com/ax-studios/frontend-web">
          <span className="text-primary hover:underline">College CMS</span>
        </a>{" "}
        I would like if you contribute to it.
        <br />
      </p>
    </div>
  );
};
export default InfoSection;

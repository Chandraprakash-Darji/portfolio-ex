import React, { useEffect, useState } from "react";

const AnimatedText = ({ text, speed, delay, classname, as }) => {
    const [renderText, setRenderText] = useState("");
    const [randomChar, setRandomChar] = useState("$");
    const [count, setCount] = useState(0);

    const Speed = speed || 50;
    const Component = as || "span";
    useEffect(() => {
        let intervalForText, intervalForRanChar;
        if (renderText.length >= text.length) {
            setRandomChar("");
            return;
        }
        intervalForText = setInterval(() => {
            setRenderText(() => `${renderText}${text[count]}`);
            setCount((prev) => prev + 1);
        }, Speed);

        intervalForRanChar = setInterval(() => {
            const charText = "!@#$%^&*()_+=-~`.|\\\"'{}[]:;<>,.?/";
            setRandomChar(
                () => charText[Math.floor(Math.random() * charText.length)]
            );
        }, 50);
        return () => {
            clearInterval(intervalForText);
            clearInterval(intervalForRanChar);
        };
    }, [count, renderText, speed, text, delay]);

    return (
        <Component className={classname}>
            {renderText}
            {randomChar}
        </Component>
    );
};

export default AnimatedText;

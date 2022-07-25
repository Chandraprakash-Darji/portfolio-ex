import React, { useEffect, useState } from "react";

const AnimatedText = ({ text, speed, delay, classname }) => {
    const [renderText, setRenderText] = useState("");
    const [randomChar, setRandomChar] = useState("$");
    const [count, setCount] = useState(0);
    useEffect(() => {
        let intervalForText, intervalForRanChar;
        if (renderText.length >= text.length) {
            setRandomChar("");
            return;
        }
        intervalForText = setInterval(() => {
            setRenderText(() => `${renderText}${text[count]}`);
            setCount((prev) => prev + 1);
        }, speed);

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
        <span className={classname}>
            {renderText}
            {randomChar}
        </span>
    );
};

export default AnimatedText;

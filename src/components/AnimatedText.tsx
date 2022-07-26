import React, { useEffect, useState } from "react";
import useInterval from "../hook/useInterval";

type AnimatedTextOwnProps<E extends React.ElementType> = {
    text: string;
    speed?: number;
    delay?: number;
    as?: E;
};

type Props<E extends React.ElementType> = AnimatedTextOwnProps<E> &
    Omit<React.ComponentProps<E>, keyof AnimatedTextOwnProps<E>>;

const AnimatedText = <E extends React.ElementType>({
    text,
    speed,
    delay,
    as,
    ...props
}: Props<E>) => {
    const [renderText, setRenderText] = useState("");
    const [randomChar, setRandomChar] = useState("");
    const [count, setCount] = useState(0);

    const Speed = speed || 50;
    const CharSpeed = Speed < 50 ? Speed - 20 : 50;
    const Component = as || "span";

    function handleTextTyping(
        renderText: string,
        text: string,
        count: number,
        setCount: React.Dispatch<React.SetStateAction<number>>
    ) {
        setRenderText(() => `${renderText}${text[count]}`);
        setCount((prev) => prev + 1);
    }

    function handleRandomChar(
        setRandomChar: React.Dispatch<React.SetStateAction<string>>
    ) {
        const charText = "!@#$%^&*()_+=-~`.|\\\"'{}[]:;<>,.?/";
        setRandomChar(
            () => charText[Math.floor(Math.random() * charText.length)]
        );
    }

    const [startTyping, stopTyping] = useInterval(
        () => handleTextTyping(renderText, text, count, setCount),
        Speed
    );

    const [startChar, stopChar] = useInterval(
        () => handleRandomChar(setRandomChar),
        CharSpeed
    );

    useEffect(() => {
        if (renderText.length >= text.length) {
            setRandomChar("");
            stopChar();
            stopTyping();
            return;
        }
        setTimeout(() => {
            startTyping();
            startChar();
        }, delay);

        return () => {};
    }, [delay, renderText, text, startChar, startTyping, stopChar, stopTyping]);

    return (
        <Component {...props}>
            {renderText}
            {randomChar}
        </Component>
    );
};

export default AnimatedText;

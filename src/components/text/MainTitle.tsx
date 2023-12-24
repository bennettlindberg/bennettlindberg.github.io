import { useEffect, useState } from "react";

export default function MainTitle() {
    const [currentTextPhase, setCurrentTextPhase] = useState<number>(0);

    const textPhases = [
        "H",
        "Hi",
        "Hi,",
        "Hi, ",
        "Hi, I",
        "Hi, I'",
        "Hi, I'm",
        "Hi, I'm ",
        "Hi, I'm B",
        "Hi, I'm Be",
        "Hi, I'm Ben",
        "Hi, I'm Benn",
        "Hi, I'm Benne",
        "Hi, I'm Bennet",
        "Hi, I'm Bennett",
        "Hi, I'm Bennett ",
        "Hi, I'm Bennett L",
        "Hi, I'm Bennett Li",
        "Hi, I'm Bennett Lin",
        "Hi, I'm Bennett Lind",
        "Hi, I'm Bennett Lindb",
        "Hi, I'm Bennett Lindbe",
        "Hi, I'm Bennett Lindber",
        "Hi, I'm Bennett Lindberg",
        "Hi, I'm Bennett Lindberg!",
        "Hi, I'm Bennett Lindberg!",
        "Hi, I'm Bennett Lindberg!",
        "Hi, I'm Bennett Lindberg!",
        "Hi, I'm Bennett Lindberg!",
        "Hi, I'm Bennett Lindberg!",
        "Hi, I'm Bennett Lindberg!",
        "Hi, I'm Bennett Lindberg!",
        "Hi, I'm Bennett Lindberg!",
        "Hi, I'm Bennett Lindberg!",
        "Hi, I'm Bennett Lindberg!",
        "Hi, I'm Bennett Lindberg!",
        "Hi, I'm Bennett Lindberg!",
        "Hi, I'm Bennett Lindberg!",
        "Hi, I'm Bennett Lindberg!",
        "Hi, I'm Bennett Lindberg!",
        "Hi, I'm Bennett Lindberg!",
        "Hi, I'm Bennett Lindberg!",
        "Hi, I'm Bennett Lindberg!",
        "Hi, I'm Bennett Lindberg!",
        "Hi, I'm Bennett Lindberg!",
    ];

    useEffect(() => {
        const startingTime = Math.floor(new Date().getTime() / 200);

        const interval = setInterval(() => setCurrentTextPhase((Math.floor(new Date().getTime() / 200) - startingTime) % 45), 200);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="flex flex-row items-center justify-center text-center font-bold text-lg sm:text-xl md:text-3xl lg:text-5xl">
                {textPhases[currentTextPhase]}
                <div className="w-[2px] md:w-[3px] lg:w-[4px] h-[20px] md:h-[30px] lg:h-[50px] bg-blue-500 dark:bg-blue-300 animate-cursor-blink"></div>
            </div>
        </>
    )
}
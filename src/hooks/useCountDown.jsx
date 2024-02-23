import { useState, useEffect, useRef } from "react";

export const useCountDown = (seconds, callback) => {
    const initialTime = seconds;
    const [time, setTime] = useState(seconds);
    const [isActive, setIsActive] = useState(false);
    const timerId = useRef();

    const startTimer = () => {
        setIsActive(true);
    };

    const stopTimer = () => {
        setIsActive(false);
    };

    const resetTimer = () => {
        setIsActive(false); // Detener el temporizador actual
        setTime(initialTime); // Establecer el tiempo inicial
    };

    useEffect(() => {
        if (isActive) {
            timerId.current = setInterval(() => {
                setTime((prevTime) => {
                    if (prevTime <= 0) {
                        clearInterval(timerId.current);
                        setIsActive(false);
                        callback && callback();
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        } else {
            clearInterval(timerId.current);
        }

        return () => clearInterval(timerId.current);
    }, [isActive, callback]);

    return { time, startTimer, setTime, stopTimer, resetTimer };
};

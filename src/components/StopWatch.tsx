import { useEffect, useRef, useState } from "react";

interface StopWatchProps {
  startTime: number;
}

const StopWatch = ({ startTime }: StopWatchProps): JSX.Element => {
  const [timer, setTimer] = useState<number>(startTime);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const timerId = useRef<number | undefined>();

  const startTimer = (): void => {
    timerId.current = setInterval(() => setTimer((prev) => prev + 1), 100);
  };

  const stopTimer = (): void => {
    setIsPaused(true);
    clearInterval(timerId.current);
  };

  const resumeTimer = (): void => {
    timerId.current = setInterval(() => setTimer((prev) => prev + 1), 100);
    setIsPaused(false);
  };

  useEffect(() => {}, []);

  return (
    <main>
      <p>StopWatch Timer : {timer}</p>
      <button onClick={startTimer} disabled={isPaused || timer !== startTime}>
        Start
      </button>
      {!isPaused ? (
        <button onClick={stopTimer}>Stop</button>
      ) : (
        <button onClick={resumeTimer}>Resume</button>
      )}
      <button
        onClick={() => {
          setTimer(0);
          setIsPaused(false);
        }}
      >
        Reset
      </button>
    </main>
  );
};

export default StopWatch;

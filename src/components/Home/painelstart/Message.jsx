import { useEffect, useState, useRef } from 'react';

const message =
  'Que tal testar seus conhecimentos sobre o nosso maravilhoso Sistema Solar?';

function Message() {
  const [msg, setMsg] = useState('');
  const [cont, setCont] = useState(0);

  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCont((c) => c + 1);
      setMsg(() => message.slice(0, cont));
    }, 50);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [cont]);

  useEffect(() => {
    if (cont > message.length) {
      clearInterval(intervalRef.current);
    }
  }, [cont]);

  return (
    <p className="text-sm md:text-lg font-bold text-gray-200 lg:text-xl dark:text-gray-400 self-start">
      {msg} <span className="typing-square" />
    </p>
  );
}

export default Message;

import React, { useState, useEffect } from 'react';
import './Envelope.css';

const Envelop: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    if (isOpen) {
      const audio = document.createElement('iframe');
      audio.src = 'https://www.youtube.com/embed/knHQDcm-KVY?autoplay=1&start=0';
      audio.allow = 'autoplay';
      audio.style.display = 'none';
      audio.id = 'hidden-audio';
      document.body.appendChild(audio);

      return () => {
        const existingAudio = document.getElementById('hidden-audio');
        if (existingAudio) {
          document.body.removeChild(existingAudio);
        }
      };
    }
  }, [isOpen]);

  return (
    <div className="envelope-container">
      <div className={`envelope ${isOpen ? 'open' : ''}`}>
        <div className="envelope-flap" onClick={handleOpen}></div>
        <div className="envelope-body">
          <p>Pentru scumpa mea iubita</p>
          <p>Te iubesc mult Ioana</p>
        </div>
      </div>
      {isOpen && (
        <div className="letter">
          <p>Hey ingeras frumos, vreau sa iti urez o zi de 24 februarie minunata. Vreau
            sa stii ca te iubesc nebuneste, si vreau sa fiu non-stop cu tini. Te iubesc mult de tot,
            si abia astept sa locuim impreuna. Cand ajungi la partea asta sa fii la mine si sa ma pupi frumoaso!
          </p>
        </div>
      )}
    </div>
  );
};

export { Envelop };

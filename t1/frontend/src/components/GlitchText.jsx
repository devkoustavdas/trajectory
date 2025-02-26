import React from 'react';

const GlitchText = ({
  children,
  speed = 1,
  enableShadows = true,
  enableOnHover = true,
  className = '',
}) => {
  const inlineStyles = {
    '--after-duration': `${speed * 3}s`,
    '--before-duration': `${speed * 2}s`,
    '--after-shadow': enableShadows ? '-5px 0 red' : 'none',
    '--before-shadow': enableShadows ? '5px 0 cyan' : 'none',
  };

  return (
    <div
      className={`glitch ${className}`}
      style={inlineStyles}
      data-text={children}
    >
      {children}
      <style jsx>{`
        .glitch {
          color: #fff;
          font-size: clamp(2rem, 10vw, 8rem);
          white-space: nowrap;
          font-weight: 900;
          position: relative;
          margin: 0 auto;
          user-select: none;
          cursor: pointer;
        }

        .glitch::after,
        .glitch::before {
          content: attr(data-text);
          position: absolute;
          top: 0;
          color: #fff;
          background-color: #060606;
          overflow: hidden;
          clip-path: inset(0 0 0 0);
        }

        .glitch::after {
          left: 10px;
          text-shadow: var(--after-shadow, -10px 0 red);
          animation: animate-glitch var(--after-duration, 3s) infinite linear alternate-reverse;
        }

        .glitch::before {
          left: -10px;
          text-shadow: var(--before-shadow, 10px 0 cyan);
          animation: animate-glitch var(--before-duration, 2s) infinite linear alternate-reverse;
        }

        @keyframes animate-glitch {
          0%   { clip-path: inset(20% 0 50% 0); }
          5%   { clip-path: inset(10% 0 60% 0); }
          10%  { clip-path: inset(15% 0 55% 0); }
          15%  { clip-path: inset(25% 0 35% 0); }
          20%  { clip-path: inset(30% 0 40% 0); }
          25%  { clip-path: inset(40% 0 20% 0); }
          30%  { clip-path: inset(10% 0 60% 0); }
          35%  { clip-path: inset(15% 0 55% 0); }
          40%  { clip-path: inset(25% 0 35% 0); }
          45%  { clip-path: inset(30% 0 40% 0); }
          50%  { clip-path: inset(20% 0 50% 0); }
          55%  { clip-path: inset(10% 0 60% 0); }
          60%  { clip-path: inset(15% 0 55% 0); }
          65%  { clip-path: inset(25% 0 35% 0); }
          70%  { clip-path: inset(30% 0 40% 0); }
          75%  { clip-path: inset(40% 0 20% 0); }
          80%  { clip-path: inset(20% 0 50% 0); }
          85%  { clip-path: inset(10% 0 60% 0); }
          90%  { clip-path: inset(15% 0 55% 0); }
          95%  { clip-path: inset(25% 0 35% 0); }
          100% { clip-path: inset(30% 0 40% 0); }
        }
      `}</style>
    </div>
  );
};

export default GlitchText;

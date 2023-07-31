import React from 'react';

const GreenTick = () => {
  return (
    <div style={{ margin: '0 5px' }}>
      <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7.5" cy="7" r="7" fill="#01B99F" />
        <path
          d="M6.09471 8.38069L10.2397 4.19507C10.3685 4.06501 10.5324 3.99998 10.7315 3.99998C10.9305 3.99998 11.0945 4.06501 11.2233 4.19507C11.3521 4.32513 11.4165 4.49066 11.4165 4.69167C11.4165 4.89267 11.3521 5.05821 11.2233 5.18827L6.58649 9.87048C6.44598 10.0124 6.28206 10.0833 6.09471 10.0833C5.90737 10.0833 5.74344 10.0124 5.60294 9.87048L3.77633 8.02597C3.64753 7.89591 3.58313 7.73038 3.58313 7.52937C3.58313 7.32837 3.64753 7.16284 3.77633 7.03278C3.90513 6.90271 4.06905 6.83768 4.26811 6.83768C4.46716 6.83768 4.63109 6.90271 4.75989 7.03278L6.09471 8.38069Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default GreenTick;

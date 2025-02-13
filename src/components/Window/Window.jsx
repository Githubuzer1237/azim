// import React, { useState, useEffect } from 'react';
// import s from './Window.module.scss';

// const Window = ({ h1 = "★★★★★★★★", windowtext, special, bgcolor, positionx = 100, positiony = 200 }) => {
//   const [position, setPosition] = useState({ x: positionx, y: positiony });
//   const [isDragging, setIsDragging] = useState(false);
//   const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
//   const [visible, setVisible] = useState(true);
//   const [isResetting, setIsResetting] = useState(false);

//   const handleMouseDown = (e) => {
//     setIsDragging(true);
//     setDragStart({
//       x: e.clientX - position.x,
//       y: e.clientY - position.y,
//     });
//     e.stopPropagation();
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;

//     setPosition({
//       x: e.clientX - dragStart.x,
//       y: e.clientY - dragStart.y,
//     });
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   const handleClose = () => {
//     setVisible(false);
//     setTimeout(() => {
//       setIsResetting(true);
//       setTimeout(() => {
//         setVisible(true);
//         setIsResetting(false);
//       }, 1000);
//     }, 1000); 
//   };

//   if (!visible && !isResetting) return null;

//   return (
//     <div
//       className={`${s.window} ${bgcolor ? s[bgcolor] : ''} ${isResetting ? s.resetting : ''}`}
//       style={{
//         top: `${position.y}px`,
//         left: `${position.x}px`,
//         position: 'absolute',
//         cursor: isDragging ? 'grabbing' : 'grab',
//       }}
//       onMouseMove={isDragging ? handleMouseMove : undefined}
//       onMouseUp={isDragging ? handleMouseUp : undefined}
//     >
//       <div
//         className={`${s.header} ${bgcolor ? s[bgcolor] : ''}`}
//         onMouseDown={handleMouseDown}
//       >
//         <span>{h1}</span>
//       <div className={s.btns}>
//       <button onClick={handleClose} className={s.closeButton}>
//           -
//         </button>
//         <button onClick={handleClose} className={s.closeButton}>
//         🔲
//         </button>
//         <button onClick={handleClose} className={s.closeButton}>
//           ×
//         </button>
//       </div>

//       </div>
//       <div className={s.content}>
//         {windowtext}
//         <span>{special}</span>
//       </div>
//     </div>
//   );
// };

// export default Window;
import React, { useState } from 'react';
import s from './Window.module.scss';

const Window = ({ h1 = "★★★★★★★★", windowtext, special, positionx = 100, positiony = 200, onClose }) => {
  const [position, setPosition] = useState({ x: positionx, y: positiony });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isClosing, setIsClosing] = useState(false);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
    e.stopPropagation();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 500); // Время должно совпадать с `transition` в CSS
  };

  return (
    <div
      className={`${s.window} ${isClosing ? s.resetting : ""}`}
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        position: 'absolute',
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
      onMouseMove={isDragging ? handleMouseMove : undefined}
      onMouseUp={isDragging ? handleMouseUp : undefined}
    >
      <div className={s.header} onMouseDown={handleMouseDown}>
        <span>{h1}</span>
        <div className={s.btns}>
          <button onClick={handleClose} className={s.closeButton}>-</button>
          <button onClick={handleClose} className={s.closeButton}>🔲</button>
          <button onClick={handleClose} className={s.closeButton}>×</button>
        </div>
      </div>
      <div className={s.content}>
        {windowtext}
        <span>{special}</span>
      </div>
    </div>
  );
};

export default Window;

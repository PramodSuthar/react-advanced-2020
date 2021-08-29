import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setshow] = useState(false)
  return (<>
    <button className="btn" onClick={() => setshow(!show)}>show/hide</button>
    {show && <Item />}
  </>
  );
};

const Item = () => {
  const [size, setsize] = useState(window.innerWidth);

  const checkSize = () => {
    setsize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize);
    };
  }, []);

  return (
    <div style={{ marginTop: '2rem' }}>
      <h1>window</h1>
      <h2>size : {size} px</h2>
    </div>
  );
};

export default ShowHide;

import React, {useEffect, useState} from 'react';

export default function countDown() {
  const [Show, setShow] = useState(0);
  //   to hold event
  function handleInc() {
    setShow(Show + 1);
  }

  console.log(Show);
  //   function handleDec(e) {}
  return (
    <div className="container-fluid">
      <div className="col-md-12 subAdd">
        <div className="header">
          <form>
            <button type="submit">-</button>
            <input value />
            <button onClick={handleInc}>+</button>
          </form>
        </div>
      </div>
    </div>
  );
}

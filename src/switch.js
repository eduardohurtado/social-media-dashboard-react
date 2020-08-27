import React, { useRef, useEffect, useState } from "react";
import "./switch.css";

function Switch() {
  const ref = useRef(null);
  const [checked, setChecked] = useState(false);

  function handleChange() {
    setChecked(ref.current.checked);
    if (ref.current.checked) {
      document.body.classList.remove("is-light-mode");
      document.body.classList.add("is-dark-mode");
    } else {
      document.body.classList.remove("is-dark-mode");
      document.body.classList.add("is-light-mode");
    }
  }

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setChecked(mq.matches);
  }, []);

  return (
    <div className="dark-mode">
      <p className="dark-mode-title">Dark Mode</p>
      <input
        type="checkbox"
        ref={ref}
        onChange={handleChange}
        checked={checked}
        className="checkbox"
        id="checkbox"
      />
      <label className="switch" htmlFor="checkbox"></label>
    </div>
  );
}

export default Switch;

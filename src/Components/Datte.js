import React, { useState } from "react";
import moment from "moment";
import classes from "./Date.module.css";
// import { format } from 'date-fns'

const Datte = () => {
  const [dte1, setDte1] = useState();
  const [dte2, setDte2] = useState();
  const [duration, setDuration] = useState();

  const submitHandler = () => {
    let date1 = new Date(dte1);
    let date2 = new Date(dte2);
    let first = date2.getTime() - date1.getTime();
    console.log(first, "first........");
    let result = first / (1000 * 60 * 60 * 24);
    setDuration(result);
  };

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.inp_wrapper}>
          <div className={classes.date_wrapper}>
            <label>Start Date</label>
            <input type="date" className={classes.date} onChange={(e) => setDte1(e.target.value)} />
          </div>
          <div className={classes.date_wrapper}>
            <label>End Date</label>
            <input type="date" className={classes.date} onChange={(e) => setDte2(e.target.value)} />
          </div>
        </div>
        <button id="submit" onClick={submitHandler}>
          Submit
        </button>
        <div style={{ color: "white" }}>{duration}</div>
      </div>
    </div>
  );
};

export default Datte;

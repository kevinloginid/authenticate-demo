import React from "react";
import style from "./style.module.css";

import { currentDay } from "../../utils/date";

import Button from "../../components/Button/";
import { ReactComponent as DownArrow } from "../../imgs/down-arrow.svg";
import { ReactComponent as Calender } from "../../imgs/calender.svg";

const Option = function ({ subject, title, extra, children }) {
  return (
    <div className={style.info}>
      <div>
        {subject && <div className={style.subject}>{subject}</div>}
        {title && <div className={style.title}>{title}</div>}
        {extra && <div className={style.extra}>{extra}</div>}
      </div>
      <div className={style.right}>{children}</div>
    </div>
  );
};

const Mobile = function () {
  return (
    <div>
      <div className={style.group}>
        <Option subject="Account:" title="37280*****5562">
          <DownArrow />
        </Option>
        <Option
          subject="Paypee:"
          title="YYZ Financial Cashback Card"
          extra="4563 2100 5567 9860"
        >
          <DownArrow />
        </Option>
        <Option title="Amount:">
          <div className={style.amount}>$937.00</div>
        </Option>
      </div>
      <div className={style.group}>
        <Option subject="How Often:" title="Once">
          <DownArrow />
        </Option>
        <Option subject="Date:" title={currentDay()}>
          <Calender />
        </Option>
      </div>
      <div className={style.button}>
        <Button text="Make a Payment" />
      </div>
    </div>
  );
};

export default Mobile;

import React, { useState } from "react";

import styles from "./index.module.scss";

export default function TableSearch(props: any) {
  const [isOpen, setOpen] = useState(false);

  const years = ["Все", "2019", "2020", "2021"];

  return (
    <div className={[styles.search_bar].join(" ")}>
      <span className={[styles.custom_label].join(" ")}>Выбрать год:</span>
      <div className={[styles.custom_select_wrapper].join(" ")}>
        <div
          className={[styles.custom_select, isOpen ? styles.open : ""].join(
            " "
          )}
        >
          <div
            className={[styles.custom_select_trigger].join(" ")}
            onClick={() => setOpen(!isOpen)}
          >
            <span>{props.selectedYear}</span>
            <div className={[styles.arrow].join(" ")}></div>
          </div>
          <div className={[styles.custom_options].join(" ")}>
            {years
              .filter((year) => year !== props.selectedYear)
              .map((year) => (
                <span
                  key={year}
                  className={[styles.custom_option].join(" ")}
                  data-value={year}
                  onClick={() => {
                    props.setSelectedYear(year);
                    setOpen(false);
                  }}
                >
                  {year}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

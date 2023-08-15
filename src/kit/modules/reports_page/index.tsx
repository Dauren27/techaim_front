import React, { useState, useEffect } from "react";
import SectionHeader from "../../components/headers/section-header";
import Breadcrumbs from "../../components/breadcrumbs";
import ReportsTable from "./reports_table";
import TableSearch from "./reports_table/table_search";
import { getReport } from "../../../api/axiosApiRequest";
import { TGetReport } from "../admin_ reports/TCreateReports";
import styles from "./index.module.scss";
import { useTranslation } from "react-i18next";

export default function ReportsPage() {
  const { t } = useTranslation();
  const [reports, setData] = useState<TGetReport>();
  const [selectedYear, setSelectedYear] = useState("Все");

  useEffect(() => {
    getReport()
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);

  const filteredReports =
    reports != undefined && selectedYear != "Все"
      ? reports.list.filter((item: any) => item.year == selectedYear)
      : reports
      ? reports.list
      : [];
  return (
    <>
      <section>
        <Breadcrumbs page_title={t("reports")} page_url="/reports" />
      </section>
      <SectionHeader title={t("reports")} />
      <section>
        <div>
          <div className={[styles.table_wrapper].join(" ")}>
            <div className={[styles.table_search_wrapper].join(" ")}>
              <TableSearch
                selectedYear={selectedYear}
                setSelectedYear={setSelectedYear}
              />
            </div>
            <div className={[styles.table].join(" ")}>
              <div className={[styles.table_row].join(" ")}>
                <div className={[styles.table_header].join(" ")}>№</div>
                <div className={[styles.table_header].join(" ")}>
                  {t("report_name")}
                </div>
                <div className={[styles.table_header].join(" ")}>{t("report_year")}</div>
                <div className={[styles.table_header].join(" ")}>{t("report_download")}</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {filteredReports.map((el: any) => (
            <ReportsTable
              id={el.id}
              name={el.name}
              year={el.year}
              lang={el.lang}
              key={el.id}
              data-value={el.year}
            />
          ))}
        </div>
      </section>
    </>
  );
}

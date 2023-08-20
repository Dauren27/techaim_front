import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { editReport, getReportById } from "../../../../api/axiosApiRequest";
import { TGetReportById } from "../admin_edit_reports/TEditReports";
import { Link, useHistory, useParams } from "react-router-dom";
import { useUpdatePartnerMutation } from "../../../../store/queryReducers/partnersApi";
import { useUpdateReportMutation } from "../../../../store/queryReducers/reportsApi";

import styles from "../../admin_news/index.module.scss";

interface EditReportParams {
  id: string;
}
const AdminEditTeam: FC = () => {
  const params = useParams<EditReportParams>();
  const history = useHistory();
  const [selectedFileKyr, setSelectedFileKyr] = useState<any>();
  const [selectedFileRus, setSelectedFileRus] = useState<any>();
  const [selectedFileEng, setSelectedFileEng] = useState<any>();
  const initialData = {
    lang: "RUS",
    name: "",
  };

  const [year, setYear] = useState("");
  const [payload, setPayload] = useState(initialData);
  const [data, setData] = useState<TGetReportById>();
  const [updateReport, { isLoading, isError, isSuccess }] =
    useUpdateReportMutation();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    const fileNames = [
      {
        lang: "RUS",
        name: payload.name,
      },
      {
        lang: "KYR",
        name: payload.name + "KYR",
      },
      {
        lang: "ENG",
        name: payload.name + "ENG",
      },
    ];
    const values = {
      year,
      createUpdateReportTrDtos: fileNames,
    };
    formData.append("kyrPdf", selectedFileKyr);
    formData.append("rusPdf", selectedFileRus);
    formData.append("engPdf", selectedFileEng);
    formData.append("body", JSON.stringify(values));
    await updateReport({ id: params.id, body: formData });
  };

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      if (event.target.name == "kyrPdf") {
        setSelectedFileKyr(event.target.files[0]);
      }
      if (event.target.name == "rusPdf") {
        setSelectedFileRus(event.target.files[0]);
      }
      if (event.target.name == "engPdf") {
        setSelectedFileEng(event.target.files[0]);
      }
    }
  };

  const handleChangeData = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = event.target.value;
    setPayload({
      ...payload,
      [event.target.name]: value,
    });
  };
  useEffect(() => {
    getReportById(params.id)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, [params.id]);

  const handleYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value);
  };
  return (
    <form
      className={[styles.form].join("")}
      method="post"
      name="our_teamForm"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      style={{ textAlign: "center" }}
    >
      <Link
        to="/admin/reports"
        style={{
          width: "fit-content",
        }}
      >
        <Button
          type="button"
          variant="contained"
          style={{
            backgroundColor: "orange",
            marginTop: "10px",
          }}
        >
          назад
        </Button>
      </Link>
      <p className={[styles.form_header].join("")}>Редактировать Отчет</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div style={{ fontSize: "18px" }}>
          Файл
          <input
            type="file"
            name="kyrPdf"
            onChange={handleFileSelect}
            className={[styles.input_file].join("")}
          />
        </div>
        <div style={{ fontSize: "18px" }}>
          Файл
          <input
            type="file"
            name="rusPdf"
            onChange={handleFileSelect}
            className={[styles.input_file].join("")}
          />
        </div>
        <div style={{ fontSize: "18px" }}>
          Файл
          <input
            type="file"
            name="engPdf"
            onChange={handleFileSelect}
            className={[styles.input_file].join("")}
          />
        </div>
        <input
          className={[styles.form_input].join("")}
          type="text"
          name="year"
          value={data?.year}
          placeholder="введите год..."
          onChange={handleYearChange}
        />
        <input
          className={[styles.form_input].join("")}
          type="text"
          name="lang"
          value={data?.lang}
          placeholder="введите язык..."
          onChange={handleChangeData}
        />
        <input
          className={[styles.form_input].join("")}
          type="text"
          name="name"
          value={data?.name}
          placeholder="введите название..."
          onChange={handleChangeData}
        />
        <div style={{ textAlign: "center" }}>
          <Button
            type="submit"
            variant="contained"
            style={{
              width: "fit-content",
              backgroundColor: "orange",
              marginTop: "10px",
            }}
          >
            Сохранить
          </Button>
          {isLoading && (
            <p
              style={{
                textAlign: "center",
                color: "#287ff1",
                marginTop: "10px",
                fontSize: "16px",
              }}
            >
              Загрузка...
            </p>
          )}
          {isSuccess && (
            <p
              style={{
                textAlign: "center",
                color: "#0bc136",
                marginTop: "10px",
                fontSize: "16px",
              }}
            >
              Данные были успешно изменены
            </p>
          )}
          {isError && (
            <p
              style={{
                textAlign: "center",
                color: "#dd2626",
                marginTop: "10px",
                fontSize: "16px",
              }}
            >
              Произошла ошибка
            </p>
          )}
        </div>
      </div>
    </form>
  );
};

export default AdminEditTeam;

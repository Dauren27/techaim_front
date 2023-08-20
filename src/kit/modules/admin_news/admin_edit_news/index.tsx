import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { getNewsById } from "../../../../api/axiosApiRequest";
import { TGetNewsById } from "./TEditNews";
import { Link, useParams } from "react-router-dom";

import styles from "../index.module.scss";
import { useUpdateMutation } from "../../../../store/queryReducers/newsApi";

interface EditNewsParams {
  id: string;
}
const AdminEditNews: FC = () => {
  const params = useParams<EditNewsParams>();
  const [selectedFile, setSelectedFile] = useState<any>();

  const [readTime, setReadTime] = useState<number>();
  const [teamMemberId, setTeamMemberId] = useState<number>();
  const [data, setData] = useState<TGetNewsById>();
  const initialData = {
    lang: "RUS",
    title: data?.title,
    shortDescription: data?.shortDescription,
    fullDescription: data?.fullDescription,
  };
  const [body, setPayload] = useState(initialData);

  const [update, { isLoading, isError, isSuccess }] = useUpdateMutation();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    const values = {
      readTime,
      teamMemberId: teamMemberId ? teamMemberId : data?.teamMemberNameDto?.id,
      createUpdateNewsTrDtos: [body, body, body],
    };
    formData.append("photo", selectedFile);
    formData.append("body", JSON.stringify(values));
    update({ id: params.id, body: formData });
  };

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    } else console.log("error while handling file selection");
  };

  const handleChangeData = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = event.target.value;
    setPayload({
      ...body,
      [event.target.name]: value,
    });
  };

  // tslint:disable-next-line:no-console
  // fetching data from the server
  useEffect(() => {
    getNewsById(params.id)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, [params.id]);
  const handleReadTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setReadTime(Number(e.target.value));
  };
  const handleTeamMemberIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTeamMemberId(Number(e.target.value));
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
        to="/admin/news"
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
      <p className={[styles.form_header].join("")}>Редактировать Новость</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div className={[styles.form_label].join("")}>
          Фото
          <input
            type="file"
            name="file"
            onChange={handleFileSelect}
            className={[styles.input_file].join("")}
          />
        </div>
        <input
          type="text"
          className={[styles.form_input].join("")}
          name="title"
          defaultValue={data?.title}
          placeholder="введите заголовок..."
          onChange={handleChangeData}
        />
        <textarea
          name="shortDescription"
          className={[styles.form_input].join("")}
          defaultValue={data?.shortDescription}
          placeholder="введите краткое описание..."
          onChange={handleChangeData}
        />
        <textarea
          name="fullDescription"
          className={[styles.form_input].join("")}
          defaultValue={data?.fullDescription}
          placeholder="введите полное описание..."
          onChange={handleChangeData}
        />
        <input
          type="text"
          name="readTime"
          className={[styles.form_input].join("")}
          defaultValue={data?.readTime}
          placeholder="Время загрузки..."
          onChange={handleReadTimeChange}
        />
        <input
          type="text"
          name="teamMemberId"
          className={[styles.form_input].join("")}
          defaultValue={data?.teamMemberNameDto?.id}
          placeholder="введите team member id..."
          onChange={handleTeamMemberIdChange}
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

export default AdminEditNews;

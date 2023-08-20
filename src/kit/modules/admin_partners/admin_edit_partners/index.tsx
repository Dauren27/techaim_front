import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { getPartnerById } from "../../../../api/axiosApiRequest";
import { TGetPartnerById } from "../admin_edit_partners/TEditPartners";
import { Link, useHistory, useParams } from "react-router-dom";
import { useUpdatePartnerMutation } from "../../../../store/queryReducers/partnersApi";

import styles from "../../admin_news/index.module.scss";

interface EditPartnerParams {
  id: string;
}
const AdminEditTeam: FC = () => {
  const params = useParams<EditPartnerParams>();
  const history = useHistory();
  const [selectedFile, setSelectedFile] = useState<any>();
  const initialData = {
    lang: "RUS",
    name: "",
  };

  const [payload, setPayload] = useState(initialData);
  const [data, setData] = useState<TGetPartnerById>();
  const [updatePartner, { isLoading, isError, isSuccess }] =
    useUpdatePartnerMutation();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    const values = {
      createPartnerTrDtos: [payload],
    };
    formData.append("photo", selectedFile);
    formData.append("body", JSON.stringify(values));
    await updatePartner({ id: params.id, body: formData });
  };

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
    // tslint:disable-next-line:no-console
    else console.log("error while handling file selection");
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
  // tslint:disable-next-line:no-console
  // fetching data from the server
  useEffect(() => {
    getPartnerById(params.id)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, [params.id]);

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
        to="/admin/partners"
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
      <p className={[styles.form_header].join("")}>Редактировать Партнера</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div style={{ fontSize: "18px" }}>
          Фото
          <input
            type="file"
            name="file"
            onChange={handleFileSelect}
            className={[styles.input_file].join("")}
          />
        </div>
        <input
          className={[styles.form_input].join("")}
          type="text"
          name="name"
          defaultValue={data?.name}
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

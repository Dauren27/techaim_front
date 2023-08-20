import React, { ChangeEvent, useEffect, useState } from "react";
import { TGetPartners } from "./TCreatePartner";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import styles from "../admin_news/index.module.scss";
import {
  useCreatePartnerMutation,
  useDeletePartnerMutation,
  useGetPartnersQuery,
} from "../../../store/queryReducers/partnersApi";

export default function AdminPartners() {
  const history = useHistory();
  const [selectedFile, setSelectedFile] = useState<any>();
  const initialData = {
    lang: "RUS",
    name: "",
  };
  const [payload, setPayload] = useState(initialData);
  const { data, isLoading, isError } = useGetPartnersQuery();
  const [
    createPartner,
    {
      isSuccess,
      isLoading: isCreateLoading,
      isError: isCreateError,
      error,
      isSuccess: isCreateSuccess,
    },
  ] = useCreatePartnerMutation();
  const [deletePartner, {}] = useDeletePartnerMutation();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    const values = {
      createPartnerTrDtos: [payload],
    };
    formData.append("photo", selectedFile);
    formData.append("body", JSON.stringify(values));
    createPartner(formData);
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

  const handleDelete = (id: number) => {
    deletePartner(id);
  };

  return (
    <div>
      <form
        className={[styles.form].join("")}
        method="post"
        name="our_teamForm"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        style={{ textAlign: "center" }}
      >
        <Link
          to="/admin"
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
        <p className={[styles.form_header].join("")}>Добавить Партнера</p>
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
            value={payload.name}
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
              Добавить
            </Button>
            {isCreateLoading && (
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
                Данные были успешно добавлены
              </p>
            )}
            {isCreateError && (
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
      <div
        style={{
          backgroundColor: "#fff",
          margin: "0 auto",
          width: "fit-content",
          fontSize: "24px",
        }}
      >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="left">Название</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.list.map((partner: any, index: number) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {partner.id}
                    </TableCell>
                    <TableCell align="left">{partner.name}</TableCell>
                    <TableCell align="left">
                      <Button
                        variant="contained"
                        style={{ backgroundColor: "tomato" }}
                        onClick={() => handleDelete(partner.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                    <TableCell align="left">
                      <Button
                        variant="contained"
                        onClick={() =>
                          history.push(`/admin/edit/partner/${partner.id}`)
                        }
                      >
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          {isLoading && (
            <p
              style={{
                textAlign: "center",
                color: "#287ff1",
                marginTop: "10px",
              }}
            >
              Загрузка...
            </p>
          )}
          {isError && (
            <p
              style={{
                textAlign: "center",
                color: "#dd2626",
                marginTop: "10px",
              }}
            >
              Произошла ошибка
            </p>
          )}
        </TableContainer>
      </div>
    </div>
  );
}

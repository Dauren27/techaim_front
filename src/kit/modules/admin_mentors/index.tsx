import React, { ChangeEvent, useEffect, useState } from "react";
import { IGetMentor, IMentorSkillIds } from "./TCreateMentors";
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
  useCreateMutation,
  useDeleteMentorMutation,
  useGetMentorsQuery,
} from "../../../store/queryReducers/mentorsApi";

export default function AdminMentors() {
  const history = useHistory();
  const [selectedFile, setSelectedFile] = useState<any>();
  const initialData = {
    lang: "RUS",
    firstName: "",
    lastName: "",
    position: "",
    competences: "",
    bio: "",
  };

  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState<number>();
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [payload, setPayload] = useState(initialData);
  const [mentorSkillIds, setmentorSkillIds] = useState<IMentorSkillIds>({});

  const { data, isLoading, isError } = useGetMentorsQuery();
  const [
    create,
    {
      isSuccess,
      isLoading: isCreateLoading,
      isError: isCreateError,
      error,
      isSuccess: isCreateSuccess,
    },
  ] = useCreateMutation();
  const [deleteMentor, {}] = useDeleteMentorMutation();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    const values = {
      company,
      email,
      password,
      phone,
      facebook,
      twitter,
      linkedIn,
      mentorSkillIds: [mentorSkillIds],
      createMentorTrDtos: [payload],
    };
    formData.append("photo", selectedFile);
    formData.append("body", JSON.stringify(values));
    create(formData);
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
      ...payload,
      [event.target.name]: value,
    });
  };

  const handleCompanyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCompany(e.target.value);
  };
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(Number(e.target.value));
  };
  const handleMentorSkillsIdChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setmentorSkillIds({ [event.target.name]: Number(value) });
  };
  const handleFacebookChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFacebook(e.target.value);
  };
  const handleTwitterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTwitter(e.target.value);
  };
  const handleLinkedInChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLinkedIn(e.target.value);
  };

  const handleDelete = (id: number) => {
    deleteMentor(id);
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
        <p className={[styles.form_header].join("")}>Добавить Ментора</p>
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
            name="email"
            value={email}
            placeholder="Email"
            onChange={handleEmailChange}
          />
          <input
            className={[styles.form_input].join("")}
            type="text"
            name="password"
            value={password}
            placeholder="password"
            onChange={handlePasswordChange}
          />
          <input
            className={[styles.form_input].join("")}
            type="text"
            name="phone"
            value={phone}
            placeholder="Номер телефона"
            onChange={handlePhoneChange}
          />
          <input
            className={[styles.form_input].join("")}
            type="text"
            name="company"
            value={company}
            placeholder="введите название компании ментора..."
            onChange={handleCompanyChange}
          />
          <input
            className={[styles.form_input].join("")}
            type="text"
            name="firstName"
            value={payload.firstName}
            placeholder="введите имя ментора..."
            onChange={handleChangeData}
          />
          <input
            className={[styles.form_input].join("")}
            type="text"
            name="competences"
            value={payload.competences}
            placeholder="введите навык..."
            onChange={handleChangeData}
          />
          <input
            className={[styles.form_input].join("")}
            type="text"
            name="lastName"
            value={payload.lastName}
            placeholder="введите фамилию ментора..."
            onChange={handleChangeData}
          />
          <input
            className={[styles.form_input].join("")}
            type="text"
            name="position"
            value={payload.position}
            placeholder="введите позицию..."
            onChange={handleChangeData}
          />
          <input
            className={[styles.form_input].join("")}
            type="text"
            name="linkedIn"
            value={linkedIn}
            placeholder="введите linkedIn ссылку ментора..."
            onChange={handleLinkedInChange}
          />
          <input
            className={[styles.form_input].join("")}
            type="text"
            name="facebook"
            value={facebook}
            placeholder="введите facebook ссылку ментора..."
            onChange={handleFacebookChange}
          />
          <input
            className={[styles.form_input].join("")}
            type="text"
            name="twitter"
            value={twitter}
            placeholder="введите twitter ссылку ментора..."
            onChange={handleTwitterChange}
          />
          <input
            className={[styles.form_input].join("")}
            type="text"
            name="id"
            value={mentorSkillIds.id}
            placeholder="введите навыки по id..."
            onInput={handleMentorSkillsIdChange}
          />
          <textarea
            className={[styles.form_input].join("")}
            rows={10}
            name="bio"
            placeholder="ввыведите описание..."
            value={payload.bio}
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
                <TableCell align="right">Имя</TableCell>
                <TableCell align="right">Фамилия</TableCell>
                <TableCell align="right">Компания</TableCell>
                <TableCell align="right">Позиция</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.list.map((mentor: any, index: number) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {mentor.id}
                    </TableCell>
                    <TableCell align="right">
                      {mentor.mentorTrDto.firstName}
                    </TableCell>
                    <TableCell align="right">
                      {mentor.mentorTrDto.lastName}
                    </TableCell>
                    <TableCell align="right">{mentor.company}</TableCell>
                    <TableCell align="right">
                      {mentor.mentorTrDto.position}
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        style={{ backgroundColor: "tomato" }}
                        onClick={() => handleDelete(mentor.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        onClick={() =>
                          history.push(`/admin/edit/mentor/${mentor.id}`)
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

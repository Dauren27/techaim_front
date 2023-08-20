import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { TGetTeam } from "./TCreateTeammate";
import { Link, useHistory } from "react-router-dom";
import {
  useCreateTeamMutation,
  useDeleteTeamMutation,
  useGetTeamsQuery,
} from "../../../store/queryReducers/teamsApi";

import styles from "../admin_news/index.module.scss";

export default function AdminOurTeam() {
  const history = useHistory();
  const [selectedFile, setSelectedFile] = useState<any>();
  const initialData = {
    lang: "RUS",
    firstName: "",
    lastName: "",
    bio: "",
    profession: "",
  };
  const DEFAULT_INFO_ENG = {
    lang: "ENG",
    firstName: "",
    lastName: "",
    bio: "",
    profession: "",
  };
  const DEFAULT_INFO_KYR = {
    lang: "KYR",
    firstName: "",
    lastName: "",
    bio: "",
    profession: "",
  };
  const [email, setEmail] = useState("");
  const [socialLinks, setSocialLinks] = useState({
    facebook: "",
    linkedIn: "",
  });
  const [payload, setPayload] = useState(initialData);
  const { data, isLoading, isError } = useGetTeamsQuery();
  const [
    createTeam,
    {
      isSuccess,
      isLoading: isCreateLoading,
      isError: isCreateError,
      error,
      isSuccess: isCreateSuccess,
    },
  ] = useCreateTeamMutation();
  const [deleteTeam, {}] = useDeleteTeamMutation();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    const values = {
      email,
      socialLinks,
      createUpdateTeamMemberTrDtos: [
        payload,
        DEFAULT_INFO_ENG,
        DEFAULT_INFO_KYR,
      ],
    };
    formData.append("photo", selectedFile);
    formData.append("body", JSON.stringify(values));
    await createTeam(formData);
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

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleSocialChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSocialLinks({
      ...socialLinks,
      [event.target.name]: value,
    });
  };
  const handleDelete = (id: number) => {
    // delete request
    deleteTeam(id);
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
        <p className={[styles.form_header].join("")}>Добавить члена команды</p>
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
            className={[styles.form_input].join("")}
            type="text"
            name="email"
            value={email}
            placeholder="введите email..."
            onChange={handleEmailChange}
          />
          <input
            className={[styles.form_input].join("")}
            type="text"
            name="firstName"
            value={payload.firstName}
            placeholder="введите Имя..."
            onChange={handleChangeData}
          />
          <input
            className={[styles.form_input].join("")}
            type="text"
            name="lastName"
            value={payload.lastName}
            placeholder="введите Фамилию..."
            onChange={handleChangeData}
          />
          <input
            className={[styles.form_input].join("")}
            type="text"
            name="profession"
            value={payload.profession}
            placeholder="введите профессию..."
            onChange={handleChangeData}
          />
          <input
            className={[styles.form_input].join("")}
            type="text"
            name="linkedIn"
            value={socialLinks.linkedIn}
            placeholder="введите linkedIn ссылку..."
            onChange={handleSocialChange}
          />
          <input
            className={[styles.form_input].join("")}
            type="text"
            name="facebook"
            value={socialLinks.facebook}
            placeholder="введите facebook ссылку..."
            onChange={handleSocialChange}
          />
          <textarea
            className={[styles.form_input].join("")}
            rows={10}
            name="bio"
            placeholder="введите описание..."
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
                <TableCell align="right">FirstName</TableCell>
                <TableCell align="right">LastName</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Profession</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.list.map((team: any, index: number) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {team.id}
                    </TableCell>
                    <TableCell align="right">{team.firstName}</TableCell>
                    <TableCell align="right">{team.lastName}</TableCell>
                    <TableCell align="right">{team.email}</TableCell>
                    <TableCell align="right">{team.profession}</TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        style={{ backgroundColor: "tomato" }}
                        onClick={() => handleDelete(team.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        onClick={() =>
                          history.push(`/admin/edit/team/${team.id}`)
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

import React, { ChangeEvent, useEffect, useState } from "react";
import { TGetProject } from "./TCreateProject";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import moment from "moment";
import { useHistory, Link } from "react-router-dom";
import {
  useGetProjectsQuery,
  useDeleteProjectMutation,
  useCreateProjectMutation,
} from "../../../store/queryReducers/projectsApi";
import styles from "../admin_news/index.module.scss";

export default function AdminOurTeam() {
  const history = useHistory();
  const [selectedFile, setSelectedFile] = useState<any>();
  const [selectedFiles, setSelectedFiles] = useState<any>();
  const initialData = {
    lang: "RUS",
    name: "",
    goal: "",
    result: "",
  };
  const DEFAULT_INFO_RUS = {
    lang: "ENG",
    name: "translate not provided",
    goal: "translate not provided",
    result: "translate not provided",
  };
  const DEFAULT_INFO_KYR = {
    lang: "KYR",
    name: "translate not provided",
    goal: "translate not provided",
    result: "translate not provided",
  };

  const [facebook, setFacebook] = useState("");
  const [beginDate, setBeginDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [payload, setPayload] = useState(initialData);
  const { data, isLoading, isError } = useGetProjectsQuery();
  const [
    createProject,
    {
      isSuccess,
      isLoading: isCreateLoading,
      isError: isCreateError,
      error,
      isSuccess: isCreateSuccess,
    },
  ] = useCreateProjectMutation();
  const [deleteProject, {}] = useDeleteProjectMutation();

  const formatDate = (date: string, format = "MM.DD.YYYY") => {
    if (!date) return "-";
    return moment(date).format(format);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    const values = {
      beginDate: formatDate(beginDate.toString()),
      endDate: formatDate(endDate.toString()),
      facebook,
      createProjectTrDtos: [payload, DEFAULT_INFO_RUS, DEFAULT_INFO_KYR],
    };
    formData.append("coverPhoto", selectedFile);
    formData.append("body", JSON.stringify(values));
    for (const photo of selectedFiles) {
      formData.append("photos", new Blob([photo as File]));
    }
    createProject(formData);
  };

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
    // tslint:disable-next-line:no-console
    else console.log("error while handling file selection");
  };
  const handleFilesSelect = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFiles(event.target.files);
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

  const handleBeginDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBeginDate(e.target.value);
  };
  const handleFacebookChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFacebook(e.target.value);
  };

  const handleEndDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  const handleDelete = (id: number) => {
    deleteProject(id);
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
        <p className={[styles.form_header].join("")}>Добавить Проект</p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <div style={{ fontSize: "18px" }}>
            Cover Photo
            <input
              type="file"
              name="file"
              onChange={handleFileSelect}
              className={[styles.input_file].join("")}
            />
          </div>
          <div style={{ fontSize: "18px" }}>
            photos
            <input
              multiple
              type="file"
              name="file"
              onChange={handleFilesSelect}
              className={[styles.input_file].join("")}
            />
          </div>
          <input
            className={[styles.form_input].join("")}
            type="text"
            name="name"
            value={payload.name}
            placeholder="название проекта..."
            onChange={handleChangeData}
          />
          <input
            className={[styles.form_input].join("")}
            type="text"
            name="goal"
            value={payload.goal}
            placeholder="цель проекта..."
            onChange={handleChangeData}
          />
          <input
            className={[styles.form_input].join("")}
            type="text"
            name="result"
            value={payload.result}
            placeholder="результат проекта..."
            onChange={handleChangeData}
          />
          <input
            className={[styles.form_input].join("")}
            type="text"
            name="facebook"
            value={facebook}
            placeholder="ссылка facebook..."
            onChange={handleFacebookChange}
          />
          <label style={{ textAlign: "left" }} htmlFor="beginDate">
            Format: MM.DD.YYYY
          </label>
          <input
            className={[styles.form_input].join("")}
            type="text"
            name="beginDate"
            value={beginDate}
            placeholder="начало проекта год..."
            onChange={handleBeginDateChange}
          />
          <input
            className={[styles.form_input].join("")}
            type="text"
            name="endDate"
            value={endDate}
            placeholder="окончание проекта ..."
            onChange={handleEndDateChange}
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
                <TableCell align="left">Название проекта</TableCell>
                <TableCell align="left">Цель проекта</TableCell>
                <TableCell align="left">Результат проекта</TableCell>
                <TableCell align="left">Начало проекта</TableCell>
                <TableCell align="left">Окончание проекта</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.list.map((project: any, index: number) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {project.id}
                    </TableCell>
                    <TableCell align="left">{project.name}</TableCell>
                    <TableCell align="left">{project.goal}</TableCell>
                    <TableCell align="left">{project.result}</TableCell>
                    <TableCell align="left">{project.beginDate}</TableCell>
                    <TableCell align="left">{project.endDate}</TableCell>
                    <TableCell align="left">
                      <Button
                        variant="contained"
                        style={{ backgroundColor: "tomato" }}
                        onClick={() => handleDelete(project.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                    <TableCell align="left">
                      <Button
                        variant="contained"
                        onClick={() =>
                          history.push(`/admin/edit/project/${project.id}`)
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

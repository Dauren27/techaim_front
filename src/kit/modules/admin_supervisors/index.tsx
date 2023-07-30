import React, { ChangeEvent, useEffect, useState } from 'react';
import { createSupervisor, deleteSupervisor, getSupervisors } from "../../../api/axiosApiRequest";
import { IGetSupervisor } from "./TCreateSupervisor";
import {Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import { useHistory,Link } from 'react-router-dom';
const styles = require('../admin_news/index.scss');

export default function AdminSupervisor() {
  const history = useHistory()
  const [selectedFile, setSelectedFile] = useState<any>();
  const initialData =
  {
    lang: 'RUS',
    firstName: '',
    lastName: '',
    bio: '',
  }
  // const [langENG, setLangEng] = useState('ENG');
  // const [langRUS, setLangRus] = useState('RUS');
  // const [langKYR, setLangKYR] = useState('KYR');
  const [company, setCompany] = useState('');
  const [payload, setPayload] = useState(initialData);
  const [data, setData] = useState<IGetSupervisor>();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    const values = {
      company,
      createSupervisorTrDtos: [payload]
    }
    formData.append("photo", selectedFile);
    formData.append("body", JSON.stringify(values));
     await createSupervisor(formData);
  }

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
    // tslint:disable-next-line:no-console
    else console.log("error while handling file selection");
  }

  const handleChangeData = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = event.target.value;
    setPayload({
      ...payload,
      [event.target.name]: value,
    })
  }

  // tslint:disable-next-line:no-console
  // fetching data from the server
  useEffect(() => {
    getSupervisors().then((response) => setData(response.data)).catch((err) => console.log(err));
  }, [])
  const handleCompanyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCompany(e.target.value);
  }

  const handleDelete = (id: number) => {
    // delete request
    deleteSupervisor(id);
  }
  return (
    <div>
      <form
        className={[styles.form].join('')}
        method='post'
        name='our_teamForm'
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        style={{ textAlign: "center" }}
      >
        <Button type="submit" variant="contained"
                    style={{ width: 'fit-content', backgroundColor: 'orange', marginTop: "10px" }}>
                    <Link to='/admin'>
                        назад
                    </Link>
                </Button>
        <p className={[styles.form_header].join('')}>Админ Супервайзеров</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px" }}>
          <div style={{ fontSize: "18px" }}>Фото
            <input type="file" name="file" onChange={handleFileSelect} className={[styles.input_file].join('')} />
          </div>
          <input
            className={[styles.form_input].join('')}
            type="text"
            name="company"
            value={company}
            placeholder="название компании..."
            onChange={handleCompanyChange} />
          <input
            className={[styles.form_input].join('')}
            type="text"
            name="firstName"
            value={payload.firstName}
            placeholder="имя..."
            onChange={handleChangeData} />
          <input
            className={[styles.form_input].join('')}
            type="text"
            name="lastName"
            value={payload.lastName}
            placeholder="Фамилия..."
            onChange={handleChangeData} />
          <textarea
            className={[styles.form_input].join('')}
            rows={10}
            name="bio"
            placeholder="описание..."
            value={payload.bio}
            onChange={handleChangeData} />
          <div style={{ textAlign: "center" }}>
            <Button type="submit" variant="contained"
              style={{ width: 'fit-content', backgroundColor: 'orange', marginTop: "10px" }}>
              Добавить
            </Button>
          </div>
        </div>
      </form>
      <div style={{ backgroundColor: "#fff", margin: "0 auto", width: "fit-content", fontSize: "24px" }}>
      <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell align="center">Имя</TableCell>
                                <TableCell align="center">Фамилия</TableCell>
                                <TableCell align="center">Компания</TableCell>
                                <TableCell align="center">Описание</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data && data.list.map((supervisor, index) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">
                                        {supervisor.id}
                                    </TableCell>
                                    <TableCell align="center">{supervisor.firstName}</TableCell>
                                    <TableCell align="center">{supervisor.lastName}</TableCell>
                                    <TableCell align="left">{supervisor.company}</TableCell>
                                    <TableCell align="left">{supervisor.bio}</TableCell>
                                    <TableCell align="center"><Button variant="contained"
                                      style={{backgroundColor: "tomato"}}
                                     onClick={() => handleDelete(supervisor.id)}>Delete</Button>
                                    </TableCell>
                                    <TableCell
                                        align="right"><Button variant="contained"
                                        onClick={() => history.push(`/admin/edit/supervisor/${supervisor.id}`)}>Edit</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
      </div>
    </div>
  );
}

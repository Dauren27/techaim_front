import React, { ChangeEvent, useEffect, useState } from 'react';
import { createNews, deleteNews, getNews } from "../../../api/axiosApiRequest";
import { Link } from 'react-router-dom';
import { TGetNews } from "./TCreateNews";
import { useHistory } from 'react-router-dom';
import {Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";

const styles = require('./index.scss');

export default function AdminEditNews() {
    const history= useHistory()
    const [selectedFile, setSelectedFile] = useState<any>();
    const initialData =
    {
        lang: 'RUS',
        title: '',
        shortDescription: '',
        fullDescription: '',
    }
    const DEFAULT_INFO_RUS = {
        lang: 'ENG',
        title: "translate not provided",
        shortDescription: "translate not provided",
        fullDescription: 'translate not provided'
    }
    const DEFAULT_INFO_KYR = {
        lang: 'KYR',
        title: "translate not provided",
        shortDescription: "translate not provided",
        fullDescription: 'translate not provided'
    }

    // const [langENG, setLangEng] = useState('ENG');
    // const [langRUS, setLangRus] = useState('RUS');
    // const [langKYR, setLangKYR] = useState('KYR');
    const [payload, setPayload] = useState(initialData);
    const [data, setData] = useState<TGetNews>();
    const [readTime, setReadTime] = useState<number>();
    const [teamMemberId, setTeamMemberId] = useState<number>();
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData();
        const values = {
            teamMemberId,
            readTime,
            createUpdateNewsTrDtos: [payload, DEFAULT_INFO_RUS, DEFAULT_INFO_KYR]
        }
        formData.append("photo", selectedFile);
        formData.append("body", JSON.stringify(values));
        createNews(formData);
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
        getNews().then((response) => setData(response.data)).catch((err) => console.log(err));
    }, [])

    const handleReadTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setReadTime(Number(e.target.value));
    }
    const handleTeamMemberIdChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTeamMemberId(Number(e.target.value));
    }
    const handleDelete = (id: number) => {
        // delete request
        deleteNews(id);
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
                <p className={[styles.form_header].join("")}>Добавить Новости</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px" }}>
                    <div className={[styles.form_label].join('')}>Фото
                        <input type="file" name="file" onChange={handleFileSelect} className={[styles.input_file].join('')} />
                    </div>
                    <input
                        type="text"
                        className={[styles.form_input].join("")}
                        name="title"
                        value={payload.title}
                        placeholder="введите заголовок..."
                        onChange={handleChangeData} />
                    <textarea
                        name="shortDescription"
                        className={[styles.form_input].join("")}
                        value={payload.shortDescription}
                        placeholder="введите краткое описание..."
                        onChange={handleChangeData} />
                    <textarea
                        name="fullDescription"
                        className={[styles.form_input].join("")}
                        value={payload.fullDescription}
                        placeholder="введите полное описание..."
                        onChange={handleChangeData} />
                    <input
                        type="text"
                        name="readTime"
                        className={[styles.form_input].join("")}
                        value={readTime}
                        placeholder="Время загрузки..."
                        onChange={handleReadTimeChange} />
                    <input
                        type="text"
                        name="teamMemberId"
                        className={[styles.form_input].join("")}
                        value={teamMemberId}
                        placeholder="введите team member id..."
                        onChange={handleTeamMemberIdChange} />
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
                                <TableCell align="left">Заголовок</TableCell>
                                <TableCell align="left">Краткое описание</TableCell>
                                <TableCell align="left">Полное описание</TableCell>
                                <TableCell align="left">Время загрузки</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data && data.list.map((news, index) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">
                                        {news.id}
                                    </TableCell>
                                    <TableCell align="left">{news.title}</TableCell>
                                    <TableCell align="left">{news.shortDescription}</TableCell>
                                    <TableCell align="left">{news.fullDescription}</TableCell>
                                    <TableCell align="left">{news.readTime}</TableCell>
                                    <TableCell align="left"><Button variant="contained"
                                                                     style={{backgroundColor: "tomato"}}
                                                                     onClick={() => handleDelete(news.id)}>Delete</Button>
                                    </TableCell>
                                    <TableCell
                                        align="left"><Button variant="contained"
                                         onClick={() => history.push(`/admin/edit/news/${news.id}`)}>Edit</Button>
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

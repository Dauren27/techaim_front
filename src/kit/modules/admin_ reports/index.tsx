import React, { ChangeEvent, useEffect, useState } from 'react';
import { createReport, deleteReport, getReport } from "../../../api/axiosApiRequest";
import {Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import { TGetReport } from "./TCreateReports";
import { useHistory,Link } from 'react-router-dom';

const styles = require('../admin_news/index.scss');

export default function AdminReport() {
    const history = useHistory()
    const [selectedFileKyr, setSelectedFileKyr] = useState<any>();
    const [selectedFileRus, setSelectedFileRus] = useState<any>();
    const [selectedFileEng, setSelectedFileEng] = useState<any>();
    const initialData =
    {
        lang: 'RUS',
        name: '',
    }
    // const [langENG, setLangEng] = useState('ENG');
    // const [langRUS, setLangRus] = useState('RUS');
    // const [langKYR, setLangKYR] = useState('KYR');

    const [year, setYear] = useState('');
    const [payload, setPayload] = useState(initialData);
    const [data, setData] = useState<TGetReport>();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData();
        const fileNames = [{
            lang: "RUS",
            name: payload.name

        },
        {
            lang: "KYR",
            name: payload.name + "KYR"
        },
        {
            lang: "ENG",
            name: payload.name + "ENG"
        }
        ]
        const values = {
            year,
            createUpdateReportTrDtos: fileNames
        }
        formData.append("kyrPdf", selectedFileKyr);
        formData.append("rusPdf", selectedFileRus);
        formData.append("engPdf", selectedFileEng);
        formData.append("body", JSON.stringify(values));
        createReport(formData);
    }

    const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            console.log(event.target.name)
            if (event.target.name == "kyrPdf") {
                setSelectedFileKyr(event.target.files[0])
            }
            if (event.target.name == "rusPdf") {
                setSelectedFileRus(event.target.files[0])
            }
            if (event.target.name == "engPdf") {
                setSelectedFileEng(event.target.files[0])
            }
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
        getReport().then((response) => setData(response.data)).catch((err) => console.log(err));
    }, [])
    const handleYearChange = (e: ChangeEvent<HTMLInputElement>) => {
        setYear(e.target.value);
    }

    const handleDelete = (id: number) => {
        // delete request
        deleteReport(id);
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
                <p className={[styles.form_header].join('')}>Добавить Отчетов</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px" }}>
                    <div style={{ fontSize: "18px" }}>Файл
                        <input type="file" name="kyrPdf" onChange={handleFileSelect} className={[styles.input_file].join('')} />
                    </div>
                    <div style={{ fontSize: "18px" }}>Файл
                        <input type="file" name="rusPdf" onChange={handleFileSelect} className={[styles.input_file].join('')} />
                    </div>
                    <div style={{ fontSize: "18px" }}>Файл
                        <input type="file" name="engPdf" onChange={handleFileSelect} className={[styles.input_file].join('')} />
                    </div>
                    <input type="text" />
                    <input
                        className={[styles.form_input].join("")}
                        type="text"
                        name="year"
                        value={year}
                        placeholder="введите год..."
                        onChange={handleYearChange} />
                    <input
                        className={[styles.form_input].join("")}

                        type="text"
                        name="lang"
                        value={payload.lang}
                        placeholder="введите язык..."
                        onChange={handleChangeData} />
                    <input
                        className={[styles.form_input].join("")}

                        type="text"
                        name="name"
                        value={payload.name}
                        placeholder="введите название..."
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
                                <TableCell align="right">Название</TableCell>
                                <TableCell align="right">Год</TableCell>
                                <TableCell align="right">Язык</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data && data.list.map((report, index) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">
                                        {report.id}
                                    </TableCell>
                                    <TableCell align="right">{report.name}</TableCell>
                                    <TableCell align="right">{report.year}</TableCell>
                                    <TableCell align="right">{report.lang}</TableCell>
                                    <TableCell align="right"><Button variant="contained"
                                                                     style={{backgroundColor: "tomato"}}
                                                                     onClick={() => handleDelete(report.id)}>Delete</Button>
                                    </TableCell>
                                    <TableCell
                                        align="right"><Button variant="contained"
                                                              onClick={() => history.push(`/admin/edit/report/${report.id}`)}>Edit</Button>
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

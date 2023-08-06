import React, { ChangeEvent, useEffect, useState } from 'react';
import { createPartner, deletePartner, getPartner } from "../../../api/axiosApiRequest";
import { TGetPartners } from "./TCreatePartner";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import {Link, useHistory } from 'react-router-dom';
import styles from '../admin_news/index.module.scss';

export default function AdminPartners() {
    const history = useHistory();
    const [selectedFile, setSelectedFile] = useState<any>();
    const initialData =
    {
        lang: 'RUS',
        name: ""
    }
    // const [langENG, setLangEng] = useState('ENG');
    // const [langRUS, setLangRus] = useState('RUS');
    // const [langKYR, setLangKYR] = useState('KYR');

    const [payload, setPayload] = useState(initialData);
    const [data, setData] = useState<TGetPartners>();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData();
        const values = {
            createPartnerTrDtos: [payload]
        }
        formData.append("photo", selectedFile);
        formData.append("body", JSON.stringify(values));
        createPartner(formData);
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
        getPartner().then((response) => setData(response.data)).catch((err) => console.log(err));
    }, [])

    const handleDelete = (id: number) => {
        // delete request
        deletePartner(id);
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
                    <Link to='/admin' >
                        назад
                    </Link>
                </Button>
                <p className={[styles.form_header].join("")}>Добавить Партнера</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px" }}>
                    <div style={{ fontSize: "18px" }}>Фото
                        <input type="file" name="file" onChange={handleFileSelect} className={[styles.input_file].join('')} />
                    </div>
                    <input type="text" />
                    <input
                        className={[styles.form_input].join('')}
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
                                <TableCell align="left">Название</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data && data.list.map((partner, index) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">
                                        {partner.id}
                                    </TableCell>
                                    <TableCell align="left">{partner.name}</TableCell>
                                    <TableCell align="left"><Button variant="contained"
                                        style={{ backgroundColor: "tomato" }}
                                        onClick={() => handleDelete(partner.id)}>Delete</Button>
                                    </TableCell>
                                    <TableCell
                                        align="left"><Button variant="contained"
                                            onClick={() => history.push(`/admin/edit/partner/${partner.id}`)}>Edit</Button>
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

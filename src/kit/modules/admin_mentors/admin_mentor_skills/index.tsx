import React, { ChangeEvent, useEffect, useState } from 'react';
import { createMentorSkills, deleteMentorSkills, getMentorSkills } from "../../../../api/axiosApiRequest";
import { IGetMentorSkillIds } from "./TCreateSkills";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import {Link, useHistory } from 'react-router-dom';
const styles = require('../../admin_news/index.scss');

export default function AdminMentorSkills() {
    const history = useHistory();
    const [name,setName] = useState('')
    const [data, setData] = useState<IGetMentorSkillIds>();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData();
        const values = {
            name
        }
        formData.append("", JSON.stringify(values));
        createMentorSkills(formData);
    }

    useEffect(() => {
        getMentorSkills().then((response) => setData(response.data)).catch((err) => console.log(err));
    }, [])

    const handleMentorNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    const handleDelete = (id: number) => {
        // delete request
        deleteMentorSkills(id);
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
                <p className={[styles.form_header].join("")}>Добавить навыки менторов</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px" }}>
                    <input
                        className={[styles.form_input].join('')}
                        type="text"
                        name="name"
                        value={name}
                        placeholder="введите название..."
                        onChange={handleMentorNameChange} />
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
                            {data && data.list.map((mentorSkills, index) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">
                                        {mentorSkills.id}
                                    </TableCell>
                                    <TableCell align="left">{mentorSkills.name}</TableCell>
                                    <TableCell align="left"><Button variant="contained"
                                        style={{ backgroundColor: "tomato" }}
                                        onClick={() => handleDelete(mentorSkills.id)}>Delete</Button>
                                    </TableCell>
                                    <TableCell
                                        align="left"><Button variant="contained"
                                            onClick={() => history.push(`/admin/edit/mentorSkills/${mentorSkills.id}`)}>Edit</Button>
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

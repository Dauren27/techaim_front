import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import {Button} from "@material-ui/core";
import {editProject, getProjectById} from "../../../../api/axiosApiRequest";
import {TGetProjectById} from "./TEditProject";
import {useHistory, useParams} from "react-router-dom";
import moment from 'moment'
import styles from '../../admin_news/index.module.scss';

interface EditProjectParams {
    id: string;
}
const AdminEditProject: FC = () => {
    const params = useParams<EditProjectParams>();
    // tslint:disable-next-line:no-shadowed-variable
    const history = useHistory();
    const [selectedFiles, setSelectedFiles] = useState<any>();
    const [selectedFile, setSelectedFile] = useState<any>();
    const initialData =
        {
            lang: 'RUS',
            name: "",
            goal: "",
            result: "",
        }
        const DEFAULT_INFO_ENG = {
            lang: 'ENG',
            name: "",
            goal: "",
            result: "",
        }
        const DEFAULT_INFO_KYR = {
            lang: 'KYR',
            name: "",
            goal: "",
            result: "",
        }
        const [facebook, setFacebook] = useState('');
        const [beginDate, setBeginDate] = useState('');
        const [endDate, setEndDate] = useState('');
    const [payload, setPayload] = useState(initialData);
    const [data, setData] = useState<TGetProjectById>();
    const formatDate = (date: string, format = "MM.DD.YYYY") => {
        if (!date)
            return "-";
        return moment(date).format(format);
    }
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData();
        const values = {
            beginDate: formatDate(beginDate.toString()),
            endDate: formatDate(endDate.toString()),
            facebook,
            createProjectTrDtos: [payload, DEFAULT_INFO_ENG, DEFAULT_INFO_KYR]
        }
        console.log(values)
        formData.append("photo", selectedFile);
        for (const photo of selectedFiles) {
            formData.append("photos", new Blob([photo as File]))
        }
        formData.append("body", JSON.stringify(values));
        await editProject(params.id, formData);
        history.push("/admin/project");
    }

    const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setSelectedFile(event.target.files[0]);
        }
        // tslint:disable-next-line:no-console
        else console.log("error while handling file selection");
    }
    const handleFilesSelect = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setSelectedFiles(event.target.files);
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
        getProjectById(params.id).then((response) => setData(response.data)).catch((err) => console.log(err));
    }, [params.id])
    const handleBeginDateChange = (e: ChangeEvent<HTMLInputElement>) => {
        setBeginDate(e.target.value);
    }
    const handleFacebookChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFacebook(e.target.value);
    }

    const handleEndDateChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEndDate(e.target.value);
    }
    return (
        <form
        className={[styles.form].join('')}
        method='post'
        name='our_teamForm'
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        style={{textAlign: "center"}}
    >
        <p className={[styles.form_header].join("")}>Добавить Проект</p>
        <div style={{display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px"}}>
            <div style={{fontSize: "18px"}}>Cover Photo
                <input type="file" name="file" onChange={handleFileSelect}
                       className={[styles.input_file].join('')}/>
            </div>
            <div style={{fontSize: "18px"}}>photos
                <input multiple type="file" name="file" onChange={handleFilesSelect}
                       className={[styles.input_file].join('')}/>
            </div>
            <input
                className={[styles.form_input].join('')}
                type="text"
                name="name"
                defaultValue={data?.name}
                placeholder="название проекта..."
                onChange={handleChangeData}/>
            <input
                className={[styles.form_input].join('')}
                type="text"
                name="goal"
                defaultValue={data?.goal}
                placeholder="цель проекта..."
                onChange={handleChangeData}/>
            <input
                className={[styles.form_input].join('')}
                type="text"
                name="result"
                defaultValue={data?.result}
                placeholder="результат проекта..."
                onChange={handleChangeData}/>
            <input
                className={[styles.form_input].join('')}
                type="text"
                name="facebook"
                defaultValue={data?.facebook}
                placeholder="ссылка facebook..."
                onChange={handleFacebookChange}/>
            <label style={{textAlign: "left"}} htmlFor="beginDate">Format: MM.DD.YYYY</label>
            <input
                className={[styles.form_input].join('')}
                type="text"
                name="beginDate"
                defaultValue={data?.beginDate}
                placeholder="начало проекта год..."
                onChange={handleBeginDateChange}/>
            <input
                className={[styles.form_input].join('')}
                type="text"
                name="endDate"
                defaultValue={data?.endDate}
                placeholder="окончание проекта ..."
                onChange={handleEndDateChange}/>
            <div style={{textAlign: "center"}}>
                <Button type="submit" variant="contained"
                        style={{width: 'fit-content', backgroundColor: 'orange', marginTop: "10px"}}>
                    Добавить
                </Button>
            </div>
        </div>
    </form>
    );
};

export default AdminEditProject;
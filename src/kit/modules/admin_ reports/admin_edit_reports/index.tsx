import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import {Button} from "@material-ui/core";
import {editReport, getReportById} from "../../../../api/axiosApiRequest";
import {TGetReportById} from "../admin_edit_reports/TEditReports";
import {useHistory, useParams} from "react-router-dom";

import styles from '../../admin_news/index.module.scss';

interface EditReportParams {
    id: string;
}
const AdminEditTeam: FC = () => {
    const params = useParams<EditReportParams>();
    // tslint:disable-next-line:no-shadowed-variable
    const history = useHistory();
    const [selectedFileKyr, setSelectedFileKyr] = useState<any>();
    const [selectedFileRus, setSelectedFileRus] = useState<any>();
    const [selectedFileEng, setSelectedFileEng] = useState<any>();    
    const initialData = {
            lang: 'RUS',
            name: ""
        }
        const DEFAULT_INFO_ENG = {
            lang: 'ENG',
            name: ""
        }
        const DEFAULT_INFO_KYR = {
            lang: 'KYR',
            name: ""
        }
    const [year, setYear] = useState('');
    const [payload, setPayload] = useState(initialData);
    const [data, setData] = useState<TGetReportById>();

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
        await editReport(params.id, formData);
        history.push("/admin/partner");
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
        getReportById(params.id).then((response) => setData(response.data)).catch((err) => console.log(err));
    }, [params.id])

    const handleYearChange = (e: ChangeEvent<HTMLInputElement>) => {
        setYear(e.target.value);
    }
    return (
        <form
        className={[styles.form].join('')}
        method='post'
        name='our_teamForm'
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        style={{ textAlign: "center" }}
    >
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
                value={data?.year}
                placeholder="введите год..."
                onChange={handleYearChange} />
            <input
                className={[styles.form_input].join("")}

                type="text"
                name="lang"
                value={data?.lang}
                placeholder="введите язык..."
                onChange={handleChangeData} />
            <input
                className={[styles.form_input].join("")}

                type="text"
                name="name"
                value={data?.name}
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
    );
};

export default AdminEditTeam;
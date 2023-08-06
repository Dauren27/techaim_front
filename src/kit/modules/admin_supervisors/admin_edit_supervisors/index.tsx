import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import {Button} from "@material-ui/core";
import {editSupervisor, getSupervisorById} from "../../../../api/axiosApiRequest";
import {TGetSupervisorById} from "./TEditSupervisor";
import {useHistory, useParams} from "react-router-dom";

import styles from '../../admin_news/index.module.scss';

interface EditSupervisorParams {
    id: string;
}
const AdminEditSupervisor: FC = () => {
    const params = useParams<EditSupervisorParams>();
    // tslint:disable-next-line:no-shadowed-variable
    const history = useHistory();
    const [selectedFile, setSelectedFile] = useState<any>();
    const initialData =
        {
            lang: 'RUS',
            firstName: '',
            lastName: '',
            bio: '',
        }
        const DEFAULT_INFO_ENG = {
            lang: 'ENG',
            firstName: '',
            lastName: '',
            bio: '',
        }
        const DEFAULT_INFO_KYR = {
            lang: 'KYR',
            firstName: '',
            lastName: '',
            bio: '',
        }
    const [company, setCompany] = useState('');
    const [payload, setPayload] = useState(initialData);
    const [data, setData] = useState<TGetSupervisorById>();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData();
        const values = {
          company,
          createSupervisorTrDtos: [payload]
        }
        formData.append("photo", selectedFile);
        formData.append("body", JSON.stringify(values));
        await editSupervisor(params.id, formData);
        history.push("/admin/supervisors");
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
        getSupervisorById(params.id).then((response) => setData(response.data)).catch((err) => console.log(err));
    }, [params.id])
    const handleCompanyChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCompany(e.target.value);
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
        <p className={[styles.form_header].join('')}>Админ Супервайзеров</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px" }}>
          <div style={{ fontSize: "18px" }}>Фото
            <input type="file" name="file" onChange={handleFileSelect} className={[styles.input_file].join('')} />
          </div>
          <input type="text" />
          <input
            className={[styles.form_input].join('')}
            type="text"
            name="company"
            defaultValue={data?.company}
            placeholder="название компании..."
            onChange={handleCompanyChange} />
          <input
            className={[styles.form_input].join('')}
            type="text"
            name="firstName"
            defaultValue={data?.firstName}
            placeholder="имя..."
            onChange={handleChangeData} />
          <input
            className={[styles.form_input].join('')}
            type="text"
            name="lastName"
            defaultValue={data?.lastName}
            placeholder="Фамилия..."
            onChange={handleChangeData} />
          <textarea
            className={[styles.form_input].join('')}
            rows={10}
            name="bio"
            placeholder="описание..."
            defaultValue={data?.bio}
            onChange={handleChangeData} />
          <div style={{ textAlign: "center" }}>
            <Button type="submit" variant="contained"
              style={{ width: 'fit-content', backgroundColor: 'orange', marginTop: "10px" }}>
              Сохранить
            </Button>
          </div>
        </div>
      </form>
    );
};

export default AdminEditSupervisor;
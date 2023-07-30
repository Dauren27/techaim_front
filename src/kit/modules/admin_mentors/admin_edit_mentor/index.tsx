import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import {Button} from "@material-ui/core";
import {editMentor, getMentorById} from "../../../../api/axiosApiRequest";
import {TGetMentorById,IMentorSkillIds} from "./TEditMentor";
import {useHistory, useParams} from "react-router-dom";

const styles = require('../../admin_news/index.scss');

interface EditMentorParams {
    id: string;
}
const AdminEditMentor: FC = () => {
    const params = useParams<EditMentorParams>();
    const history = useHistory()
    const [selectedFile, setSelectedFile] = useState<any>();
    const initialData =
    {
        lang: "RUS",
        firstName: "",
        lastName: "",
        position: "",
        competences: "",
        bio: ""
    }
    // const [langENG, setLangEng] = useState('ENG');
    // const [langRUS, setLangRus] = useState('RUS');
    // const [langKYR, setLangKYR] = useState('KYR');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState<number>();
    // const [mentorSkillIds,setMentorSkillIds]= useState<number>([{

    // }]); 
    const [facebook, setFacebook] = useState('');
    const [twitter, setTwitter] = useState('');
    const [linkedIn, setLinkedIn] = useState('');
    const [payload, setPayload] = useState(initialData);
    const [data, setData] = useState<TGetMentorById>();
    const [mentorSkillIds, setmentorSkillIds] = useState<IMentorSkillIds>({})

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData();
        const values = {
            company,
            email,
            password,
            phone,
            facebook,
            twitter,
            linkedIn,
            mentorSkillIds: [mentorSkillIds],
            createMentorTrDtos: [payload]
        }
        formData.append("photo", selectedFile);
        formData.append("body", JSON.stringify(values));
        editMentor(params.id,formData);
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
        getMentorById(params.id).then((response) => setData(response.data)).catch((err) => console.log(err));
    }, [params.id])
    const handleCompanyChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCompany(e.target.value);
    }
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }
    const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPhone(Number(e.target.value));
    }
    const handleMentorSkillsIdChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setmentorSkillIds({[event.target.name]: Number(value)})
        console.log (mentorSkillIds);

    }
    const handleFacebookChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFacebook(e.target.value);
    }
    const handleTwitterChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTwitter(e.target.value);
    }
    const handleLinkedInChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLinkedIn(e.target.value);
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
        <p className={[styles.form_header].join("")}>Добавить Ментора</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px" }}>
            <div style={{ fontSize: "18px" }}>Фото
                <input type="file" name="file" onChange={handleFileSelect} className={[styles.input_file].join('')} />
            </div>
            <input type="text" />
            <input
                className={[styles.form_input].join("")}
                type='text'
                name='email'
                defaultValue={data?.email}
                placeholder="Email"
                onChange={handleEmailChange}
            />
            <input
                className={[styles.form_input].join("")}
                type='text'
                name='password'
                defaultValue={data?.password}
                placeholder="password"
                onChange={handlePasswordChange}
            />
            <input
                className={[styles.form_input].join("")}
                type='text'
                name='phone'
                defaultValue={data?.phone}
                placeholder="Номер телефона"
                onChange={handlePhoneChange}
            />
            <input
                className={[styles.form_input].join("")}
                type="text"
                name="company"
                defaultValue={data?.company}
                placeholder="введите название компании ментора..."
                onChange={handleCompanyChange} />
            <input
                className={[styles.form_input].join('')}
                type="text"
                name="firstName"
                defaultValue={data?.mentorTrDto.firstName}
                placeholder="введите имя ментора..."
                onChange={handleChangeData} />
            <input
                className={[styles.form_input].join('')}
                type="text"
                name="competences"
                defaultValue={data?.mentorTrDto.lastName}
                placeholder="введите навык..."
                onChange={handleChangeData} />
            <input
                className={[styles.form_input].join('')}
                type="text"
                name="lastName"
                defaultValue={data?.mentorTrDto.lastName}
                placeholder="введите фамилию ментора..."
                onChange={handleChangeData} />
            <input
                className={[styles.form_input].join('')}
                type="text"
                name="position"
                defaultValue={data?.mentorTrDto.position}
                placeholder="введите позицию..."
                onChange={handleChangeData} />
            <input
                className={[styles.form_input].join('')}
                type="text"
                name="linkedIn"
                defaultValue={data?.linkedIn}
                placeholder="введите linkedIn ссылку ментора..."
                onChange={handleLinkedInChange} />
            <input
                className={[styles.form_input].join('')}
                type="text"
                name="facebook"
                defaultValue={data?.facebook}
                placeholder="введите facebook ссылку ментора..."
                onChange={handleFacebookChange} />
            <input
                className={[styles.form_input].join('')}
                type="text"
                name="twitter"
                defaultValue={data?.twitter}
                placeholder="введите twitter ссылку ментора..."
                onChange={handleTwitterChange} />
            <input
                className={[styles.form_input].join('')}
                type="text"
                name="id"
                defaultValue={mentorSkillIds.id}
                placeholder="введите навыки по id..."
                onInput={handleMentorSkillsIdChange} />
            <textarea
                className={[styles.form_input].join('')}
                rows={10}
                name="bio"
                placeholder="ввыведите описание..."
                defaultValue={data?.mentorTrDto.bio}
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

export default AdminEditMentor;
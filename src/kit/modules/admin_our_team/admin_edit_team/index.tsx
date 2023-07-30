import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import {Button} from "@material-ui/core";
import {editTeamMember, getTeamMemberById} from "../../../../api/axiosApiRequest";
import {TGetTeamById} from "./TEditTeam";
import {useHistory, useParams} from "react-router-dom";

const styles = require('../../admin_news/index.scss');

interface EditTeamPageParams {
    id: string;
}
const AdminEditTeam: FC = () => {
    const params = useParams<EditTeamPageParams>();
    // tslint:disable-next-line:no-shadowed-variable
    const history = useHistory();
    const [selectedFile, setSelectedFile] = useState<any>();
    const initialData =
        {
            lang: 'RUS',
            firstName: '',
            lastName: '',
            bio: '',
            profession: '',
        }
        const DEFAULT_INFO_ENG = {
            lang: 'ENG',
            firstName: '',
            lastName: '',
            bio: '',
            profession: '',
        }
        const DEFAULT_INFO_KYR = {
            lang: 'KYR',
            firstName: '',
            lastName: '',
            bio: '',
            profession: '',
        }
    const [email, setEmail] = useState('');
    const [socialLinks, setSocialLinks] = useState({
        facebook: '',
        linkedIn: ''
    });
    const [payload, setPayload] = useState(initialData);
    const [data, setData] = useState<TGetTeamById>();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData();
        const values = {
            email,
            socialLinks,
            createUpdateTeamMemberTrDtos: [payload]
        }
        console.log(values)
        formData.append("photo", selectedFile);
        formData.append("body", JSON.stringify(values));
        await editTeamMember(params.id, formData);
        history.push("/admin/team");
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
        getTeamMemberById(params.id).then((response) => setData(response.data)).catch((err) => console.log(err));
    }, [params.id])
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const handleSocialChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSocialLinks({
            ...socialLinks,
            [event.target.name]: value,
        })
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
            <p className={[styles.form_header].join('')}>Edit team member</p>
            <div style={{display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px"}}>
                <div className={[styles.form_label].join('')}>Фото
                    <input type="file" name="file" onChange={handleFileSelect}
                           className={[styles.input_file].join('')}/>
                </div>
                <input
                    className={[styles.form_input].join("")}
                    type="text"
                    name="email"
                    defaultValue={data?.email}
                    placeholder="введите email..."
                    onChange={handleEmailChange}
                />
                <input
                    className={[styles.form_input].join("")}
                    type="text"
                    name="firstName"
                    defaultValue={data?.firstName}
                    placeholder="введите Имя..."
                    onChange={handleChangeData}
                />
                <input
                    className={[styles.form_input].join("")}
                    type="text"
                    name="lastName"
                    defaultValue={data?.lastName}
                    placeholder="введите Фамилию..."
                    onChange={handleChangeData}
                />
                <input
                    className={[styles.form_input].join("")}
                    type="text"
                    name="profession"
                    defaultValue={data?.profession}
                    placeholder="введите профессию..."
                    onChange={handleChangeData}
                />
                <input
                    className={[styles.form_input].join("")}
                    type="text"
                    name="linkedIn"
                    defaultValue={data?.socialLinks.linkedin}
                    placeholder="введите linkedIn ссылку..."
                    onChange={handleSocialChange}
                />
                <input
                    className={[styles.form_input].join("")}
                    type="text"
                    name="facebook"
                    defaultValue={data?.socialLinks.facebook}
                    placeholder="введите facebook ссылку..."
                    onChange={handleSocialChange}
                />
                <textarea
                    className={[styles.form_input].join("")}
                    rows={10}
                    name="bio"
                    placeholder="введите описание..."
                    defaultValue={data?.bio}
                    onChange={handleChangeData}
                />
                <div style={{textAlign: "center"}}>
                    <Button type="submit" variant="contained"
                            style={{width: 'fit-content', backgroundColor: 'orange', marginTop: "10px"}}>
                        Сохранить
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default AdminEditTeam;
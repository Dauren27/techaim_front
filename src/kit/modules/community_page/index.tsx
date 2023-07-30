import React, { useEffect } from 'react';
import SectionHeader from '../../components/headers/section-header';
import Breadcrumbs from '../../components/breadcrumbs';
import { useTranslation } from "react-i18next";
import { mentors } from '../../../misc/mentors';
import { partners } from '../../../misc/partners';
import ButtonComponent from '../../components/buttons/button'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers/rootReducer';
import { fetchFormsRequest } from '../../../store/actions/formAction';
import { path } from '../../../api/ApiRequest';
import OneRowSliderComponent from '../../components/slider/one_row_slider';
import { Link } from 'react-router-dom';


const styles = require('./index.scss');

// TODO: add photos
const ambassadors = mentors.filter((m, i) => i < 6);

const CommunityPage = (props: any) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { pending, forms, error } = useSelector(
        (state: RootState) => state.forms
    );
    useEffect(() => {
        dispatch(fetchFormsRequest());

    }, []);
    const { name,url } = forms
    console.log(url)
    let body: JSX.Element = <span></span>;
    let errorText: JSX.Element = <span></span>;
    let loading: JSX.Element = <span></span>;
    if (error) {
        errorText = (
            <div className={styles.tet_content}>{'Oops, something went wrong'}</div>
        );
    }

    if (!pending) {
        loading = <div className={styles.text_content}>Loading ...</div>;
    } else if (!forms || forms === []) {
        body = (
            <div className={styles.text_content}>
                {'Seems that there are no news'}
            </div>
        );
    }
    return (
        <>
            <Breadcrumbs page_title={t("Our community")} page_url='/community' />

            <SectionHeader title={t("Our community")} underline />
            <section className={styles.community_page}>
                <p>{t("our_community_info")}</p>
            </section>

            <div className={styles.mentees_image}></div>

            <section className={styles.community_page}>
                <h2>{t("Mentees")}</h2>
                <p>
                    {t("our_community_mentees_info")}
                </p>
                <div className={styles.columns}>
                    <div>
                        <p>{t("our_community_mentees_button_info1")}</p>
                        <a className={styles.button} href={'https://docs.google.com/forms/d/1ZRqmdSbLU8xPDj5sQyL2EF8xCuNSUL7dAwJWM-tpDxM/edit'} target="_blank">
                            <ButtonComponent color="yellow">
                                {t('our_community_mentees_button_title')}
                            </ButtonComponent>
                        </a>
                    </div>

                    <div>
                        <p>{t("our_community_mentees_button_info2")}</p>
                        <a className={styles.button} href={`https://docs.google.com/forms/d/1O_ahB9QaIZ3YnHV8djIa1q0i1y8AwFcyoA4t1pvUJUk/edit`} target="_blank">
                            <ButtonComponent color="yellow">
                                {t('our_community_mentees_button_title')}
                            </ButtonComponent>
                        </a>
                    </div>
                </div>
            </section>


            <section className={styles.community_page}>
                <div className={styles.mentors_image}></div>


                <h2>{t("Mentors")}</h2>
                <p>
                    {t("our_community_mentors_info1")}
                </p>
                <ul aria-label={t("our_community_mentors_info2")}>
                    <li>
                        {t("our_community_mentors_info3")}
                    </li>
                    <li>
                        {t("our_community_mentors_info4")}
                    </li>
                    <li>
                        {t("our_community_mentors_info5")}
                    </li>
                </ul>
                <a className={styles.button} href={`https://docs.google.com/forms/d/1Ho2GWbf6VZmzlQozS__rxFwx9t8MZNVlGu7PON56kLs/viewform?edit_requested=true`} target="_blank">
                    <ButtonComponent color="yellow">
                        {t('our_community_mentors_button_title')}
                    </ButtonComponent>

                </a>
                <div className={styles.flat_button}>
                    <a className={styles.button} href={`/mentors`} target="_blank">
                        <ButtonComponent color="yellow">
                            {t("Mentors' profiles")}
                            <KeyboardArrowRightIcon />
                        </ButtonComponent>
                    </a>
                </div>
            </section>

            <section className={styles.community_page}>
                <div className={styles.images_wrapper}>
                    {mentors.map((m) => (
                        <img
                            className={styles.image}
                            src={m.logo_url}
                            alt='avatar'
                            key={m.id}
                        />
                    ))}

                </div>
                <h2>{t("Ambassadors")}</h2>
                <p>
                    {t("our_community_ambassadors_info")}
                </p>
                <a className={styles.button} href={`https://docs.google.com/forms/d/1KV0d1Xi02ZopGZ_O59z90BMCG185Dg94HeSMJIlOzYE/edit`} target="_blank">
                    <ButtonComponent color="yellow">
                        {t('our_community_ambassadors_button_title')}
                    </ButtonComponent>
                </a>
            </section>

            <section className={styles.community_page}>

                <h2>{t('Partners')}</h2>
                <section className={styles.partners}>
                    <div className={styles.partners_secondary_cards_wrapper}>
                        <OneRowSliderComponent {...props} />
                    </div>
                </section>
                <p>
                    {t('our_community_partners_info')}
                </p>
                <Link className={styles.button} to={`/contact`}>
                    <ButtonComponent color="yellow">
                        {t('our_community_partners_button_title')}
                    </ButtonComponent>
                </Link>
            </section>
        </>
    );
};

export default CommunityPage;

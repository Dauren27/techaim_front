import React,{useEffect} from "react";
import { RootState } from "../../../store/reducers/rootReducer";
import { fetchPartnersRequest } from "../../../store/actions/partnersActions";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch,useSelector } from "react-redux";
import { path } from "../../../api/ApiRequest";
import Breadcrumbs from "../../components/breadcrumbs";
import SectionHeader from "../../components/headers/section-header";
import { useTranslation } from "react-i18next";
const styles = require("./index.scss");



export default function PartnersPage () {
 const {t}=useTranslation()
  const dispatch = useDispatch();
  const { pending, partners, error } = useSelector(
    (state: RootState) => state.partners
  );
  useEffect(() => {
    dispatch(fetchPartnersRequest());
  }, []);
    return (
        <>
        <section className={styles.container}>
                <Breadcrumbs page_title={t('partners')}  page_url={`/partners`} />
            </section>
            <SectionHeader title={t('parnersTitle')} underline />
      <div   className={styles.one_row_slider_wrapper}>
        
      {partners.map((partners:any) => (
            <div
              className={styles.slider_item} key={partners.id}
            >
              <img src={`${path}/public-api/partner/${partners.id}/logo`} alt={partners.name}/>
            </div>
           ))}
        
           </div> 
        </>

    );
  }

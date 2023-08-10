import React,{useEffect} from "react";
import Slider from "react-slick";
import { RootState } from "../../../../store/reducers/rootReducer";
import { fetchPartnersRequest } from "../../../../store/actions/partnersActions";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch,useSelector } from "react-redux";
import { path } from "../../../../api/ApiRequest";
import slide_placeholder from "../../../../shared/images/partners_placeholder.svg";
import styles from "./index.module.scss";


interface Props{
  id:number;
  name:string
}
export default function OneRowSliderComponent (props:Props) {
  const dispatch = useDispatch();
  const { pending, partners, error } = useSelector(
    (state: RootState) => state.partners
  );
  useEffect(() => {
    dispatch(fetchPartnersRequest());
  }, []);
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      autoplaySpeed: 3000,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1379,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1310,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 888,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 725,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      
      ],
    }
    return (
      <div   className={styles.one_row_slider_wrapper}>
        <Slider {...settings}> 
      {partners && partners.map((partners:any) => (
            <div
              key={Math.ceil(Math.random() * 100)}
              className={styles.slider_item}
            >
              <img src={`${path}/public-api/partner/${partners.id}/logo`} alt={partners.name}/>
            </div>
           ))}
           </Slider>
           </div>

    );
  }

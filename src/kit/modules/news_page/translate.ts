import translate from "../NewsDetails/translate"
import PopularTitle from "./news_popular/translate"
import NewsDate from "./news_feed/translate"

export default{
    "en":{
        "news_title":"NEWS",
        'news_button2':"Read completely",
        "news_popular": "Popular",
        ...PopularTitle.en,
        ...translate.en,
        ...NewsDate.en
    },
    "ru":{
         "news_title":"НОВОСТИ",
         "news_button2":"Читать полностью",
         "news_popular":"Популярные",
         ...translate.ru,
         ...PopularTitle.ru,
         ...NewsDate.ru
    },
    "kyr":{
        "news_title":"ЖАҢЫЛЫКТАР",
        "news_button2":"Толугу менен окуу",
        "news_popular":"Популардуулар",
        ...translate.kyr,
        ...PopularTitle.kyr,
        ...NewsDate.kyr
    }
}
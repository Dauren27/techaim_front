import translate from "./contact_form/translate";
export default {
  en: {
    contact_title: "Contact",
    contact_adress: "ADRESS",
    contact_adress_name: "Chui Avenue, 265/1, Bishkek, Kyrgyz Republic",
    online_service: "OUR MAIL",
    tel: "TEL:",
    offical_social_link: "Official pages",
    ...translate.en,
  },
  ru: {
    contact_title: "Контакты",
    contact_adress: "АДРЕС",
    contact_adress_name:
      "Проспект Чуй, 265/1, г. Бишкек, Кыргызская Республика",
    online_service: " Наша почта",
    tel: "тел:",
    offical_social_link: "Официальные страницы",
    ...translate.ru,
  },
  kyr: {
    contact_title: "Байланышуу үчүн",
    contact_adress: "АДРЕС",
    contact_adress_name: "Чүй проспектиси, 265/1, Бишкек, Кыргыз Республикасы",
    online_service: "Биздин почта",
    tel: "тел:",
    offical_social_link: "Расмий баракчалар",
    ...translate.kyr,
  },
};

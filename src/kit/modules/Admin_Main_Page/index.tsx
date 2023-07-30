import React from 'react';
import {Link} from 'react-router-dom';

const styles = require('./index.scss');

export default function AdminMentors() {
    const submenuItems = [
        {to: '/admin/news', lable: "1. страница Новостей"},
        {to: '/admin/mentor', lable: "2. страница Менторов"},
        {to: '/admin/partners', lable: "3. страница Партнеров"},
        {to: '/admin/project', lable: "4. страница Проектов"},
        {to: '/admin/supervisors', lable: "5. страница Супервайзеров"},
        {to: '/admin/reports', lable: "6. страница Отчётов"},
        {to: '/admin/team', lable: "7. страница Наша Команда"},
        {to: '/admin/form', lable: "8. страница Формы"},

    ];
    const Submenu = () => {
        return (
            <ol className={styles.linksUrl}>
                {submenuItems.map(({to, lable}) => (
                    <li key={to} className={styles.a}>
                        <Link to={to}>{lable}</Link>
                    </li>
                ))}
            </ol>
        );
    };

    return (

        <div className={[styles.div].join("")}>
            <h2 className={[styles.h2].join("")}>
                Админ страница
            </h2>
            <Submenu/>
        </div>
    );
};


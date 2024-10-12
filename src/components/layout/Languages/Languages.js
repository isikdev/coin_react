import React from 'react';
import styles from "./Languages.module.scss"
import {useLocation} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {languages} from "../../../utils/translations";
import {setLanguage} from "../../../redux/action/translate";
import {homePagePath} from '../../../router/path';

function Languages() {
    const language = useSelector(state => state.translate.language)
    const dispatch = useDispatch();

    const {pathname} = useLocation()
    const isHome = pathname === homePagePath;



    return (
        <>
            <div className={isHome ? styles.languages : styles.languagesSmall}>

                <div className={styles['languages__langSwitcher']}>
                    <select
                        value={language}
                        onChange={(e) => dispatch(setLanguage(e.target.value))}>

                        <option value={languages.en}>EN</option>
                        <option value={languages.ru}>RU</option>
                        <option value={languages.zh}>中文</option>
                    </select>
                </div>
            </div>
        </>
    );
}

export default Languages;
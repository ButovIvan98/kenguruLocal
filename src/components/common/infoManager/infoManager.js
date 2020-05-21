import React from "react";
import classes from './css/infoManager.module.css';

const InfoManager = (props) => {
    return <div className={'row mr-lg-1 ml-lg-1' + ' ' + classes.blockManager}>
        <div className="col-12 mt-4 text-center">
            <img src={'https://avatars.mds.yandex.net/get-pdb/69339/203472834-portret-v-profil-1457607709.14/s1200'}
                 className={classes.imgManager}/>
        </div>
        <div className={'col-12 mt-2 text-center'}>
            <span className={classes.nameManager}>
                Sankov Kirill
            </span>
        </div>
        <div className={'col-12  text-center'}>
            <span className={classes.textDescription}>
                Ваш персональный менеджер
                </span>
        </div>
        <div className={'col-12  text-center'}>
                            <span className={classes.nameManager}>
                                8-800-600-40-44
                            </span>
        </div>
        <div className={'col-12 mb-2 text-center'}>
                            <span className={classes.textDescription}>
                                Контактный номер телефона
                            </span>
        </div>
    </div>
}
export default InfoManager;
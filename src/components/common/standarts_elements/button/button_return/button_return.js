import React from 'react';
import classNamees from './css/button_return.module.css';

const Button_return = (props) => {
    return <div className={classNamees.main_block}>
        <button className={classNamees.button}>
            <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.3" d="M20 6H1M1 6L6 1M1 6L6 11" stroke="#0B202C"/>
            </svg>
            <span>Вернуться назад</span>
        </button>
    </div>
}
export default Button_return;
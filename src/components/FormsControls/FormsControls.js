import React from 'react';
import './FormsControls.css';

//-------------------------It is HOC-------------------------------------------
export const Element = Element => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        //   <div className={ s.formControl + " " + (hasError ? s.error : "") }>
        <div className={hasError ? "formControl error" : "formControl"}>
            <Element {...input} {...props} />
            { hasError && <span> {meta.error} </span>}
        </div>
    );
};




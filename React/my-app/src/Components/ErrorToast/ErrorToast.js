import React, { useCallback } from 'react';
import './Toast.css'

/* Cac tham so truyen vao la mot object chua cac thong tin id, title, description, backgroundColor*/

function ErrorToast({toastList, setList}) {
    const deleteToast = useCallback(
        (id) => {
            const toastListItem = toastList.filter(e => e.id !== id);
            setList(toastListItem);
        },
        [toastList, setList],
    )
    return (

        <div className="Toastcontainer Toastbutton-right">
            {
                toastList.map((toast, i) =>(
                    <div
                        key ={i}
                        className="Toastnotification Toasttoast Toastbutton-right"
                        style = {{backgroundColor: toast.backgroundColor}}
                    >
                        <button onClick={() => deleteToast(toast.id)}>X</button>
                        <div>
                            <p className="Toasttitle">{toast.title}</p>
                            <p className="Toastdescription">{toast.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ErrorToast

import React, {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import useClientsService from '../../services/ClientsService';
import {clientsUpdate} from "../clientsList/clientsSlice"
import { v4 as uuidv4 } from 'uuid';

import { Istate } from '../../interfaces'
import "./addForm.css"

const AddForm: React.FC = () => {
    
    const [clientName, setClientName] = useState<string>('')
    const [clientPhone, setClientPhone] = useState<string>('')
    const [clientEmail, setClientEmail] = useState<string>('')

    const [activName, setActivName] = useState<boolean>(false)
    const [activPhone, setActivPhone] = useState<boolean>(false)
    const [activEmail, setActivEmail] = useState<boolean>(false)

    const {addClient} = useClientsService();
    const dispatch = useDispatch()

    const {user} = useSelector((state: Istate) => state.clients)

    const onAddClient = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault()

        let newClient = {
            id: uuidv4(),
            user: user,
            name: clientName,
            phone: clientPhone,
            email: clientEmail
        }
    
        if (clientName.length > 3 && clientPhone.length > 10 
                                  && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(clientEmail)) {

            addClient(JSON.stringify(newClient))
                .then(() => {
                    dispatch(clientsUpdate([newClient]))
                })
                .then(() => {
                    setClientName('')
                    setClientPhone('')
                    setClientEmail('')
                    setActivName(false)
                    setActivPhone(false)
                    setActivEmail(false)
                })
        }

    }

    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {  
        setClientName(e.target.value)
        setActivName(true)
    }

    const onChangePhone = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setClientPhone(e.target.value)
        setActivPhone(true) 
    }

    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setClientEmail(e.target.value)
        setActivEmail(true)
    }

    
    let errorName = <></>
    if (activName && clientName.length < 3) {
        errorName = <div className="form_error">"Min of 3 characters"</div>
    }
    
    let errorPhone = <></>
    if (activPhone) {
        if (clientPhone.length > 12) setClientPhone(clientPhone.slice(0, 12))
        if (clientPhone.length < 11) errorPhone = <div className="form_error">"Min of 11 numbers"</div>
    }

    let errorEmail = <></>
    if (activEmail) {
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(clientEmail)) {
            errorEmail = <div className="form_error">"Invalid format"</div>
        }
    }

    return (
        <div className="add_client">
            <form className="form_add" action="#">                
                <div className="form_headline">Add a client</div>
                <input name="name" 
                       value={clientName}
                       required placeholder="Client's name" 
                       type="text"
                       onChange={onChangeName}
                       />
                {errorName}
                <input name="phone" 
                       value={clientPhone}
                       required placeholder="Phone number" 
                       type="number"
                       onChange={onChangePhone}
                       />
                {errorPhone}       
                <input name="email" 
                       value={clientEmail}
                       required placeholder="E-mail" 
                       type="email"
                       onChange={onChangeEmail}
                       />
                {errorEmail} 
                <button className="button_submit"
                        onClick={onAddClient}>Add</button>
            </form>
        </div>
    )
}

export default AddForm;
import { SlUser } from "react-icons/sl";
import { FaPhoneAlt } from "react-icons/fa";
import css from '../Contact/Contact.module.css'

export const Contact = ({ data, handlerButton }) => {

    return (
        <div>
            {data.map((item, index) => (
                <div className={css.infoContainer} key={index}>
                    <div>
                        <div className={css.personalInfo}>
                            <SlUser width="30px" height="30px" />
                            <p className={css.info}>{item.name}</p>
                        </div>
                        <div className={css.personalInfo}>
                            <FaPhoneAlt width="30px" height="30px" />
                            <p className={css.info}>{item.number}</p>
                        </div>
                    </div>
                    <div>
                        <button id={item.id} onClick={handlerButton} className={css.contactsBtn}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}
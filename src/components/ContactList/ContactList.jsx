import { Contact } from "../Contact/Contact"

export const ContactList = ({ data, handlerButton }) => {
    return (
        <Contact data={data} handlerButton={handlerButton}></Contact>

    )
}
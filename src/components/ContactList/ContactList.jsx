import { Contact } from "../Contact/Contact"

export const ContactList = ({ data, handlerButton }) => {
    return (
        <Contact data={data} search={search} handlerButton={handlerButton}></Contact>

    )
}
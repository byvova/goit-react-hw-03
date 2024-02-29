import { Contact } from "../Contact/Contact"

export const ContactList = ({ data, search, handlerButton }) => {
    return (
        <Contact data={data} search={search} handlerButton={handlerButton}></Contact>

    )
}
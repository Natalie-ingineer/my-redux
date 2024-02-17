import { BsPersonLinesFill } from "react-icons/bs";
import { GiRotaryPhone } from "react-icons/gi";
import css from "./Contact.module.css";

export const Contact = ({ contact, phonenumber, onDeleteUser, userId }) => {
  return (
    <div className={css.wraper}>
      <div className={css.infoWrap}>
        <p className={css.userName}>
          <BsPersonLinesFill className={css.icon} /> {contact}
        </p>
        <p className={css.userPhone}>
          <GiRotaryPhone className={css.icon} /> {phonenumber}
        </p>
      </div>
      <div>
        <button className={css.button} onClick={() => onDeleteUser(userId)}>
          Delete
        </button>
      </div>
    </div>
  );
};

import PropTypes from "prop-types";
import s from "./FriendList.module.css";

export default function FriendListItem({ avatar, name, status }) {
  // const status = true;
  // console.log(status);
  return (
    <div className="item">
      {/* {status ? s.onLine : s.offLine} */}
      <span className={status ? s.onLine : s.offLine}></span>
      <img className={s.avatar} src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </div>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

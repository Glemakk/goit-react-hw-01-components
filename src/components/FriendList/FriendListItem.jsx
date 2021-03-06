import PropTypes from 'prop-types'
import s from './FriendList.module.css'

export default function FriendListItem({ avatar, name, status, id }) {
  // console.log(status);
  return (
    <>
      <li className={s.item} key={id}>
        <span className={status ? s.onLine : s.offLine}></span>
        <img className={s.avatar} src={avatar} alt="" width="48" />
        <p className="name">{name}</p>
      </li>
    </>
  )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
}

//--------Ментор предложила сделать так
// export default function FriendListItem({ avatar, name, status }) {
//   return (
//     <li className="item">
//       <span className={status ? s.onLine : s.offLine}></span>
//       <img className={s.avatar} src={avatar} alt="" width="48" />
//       <p className="name">{name}</p>
//     </li>
//   )
// }

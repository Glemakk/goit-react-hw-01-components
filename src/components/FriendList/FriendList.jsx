import FriendListItem from './FriendListItem'
import s from './FriendList.module.css'

const FriendList = ({ friends }) => (
  <ul className={s.list}>
    {friends.map((friend) => (
      <li className={s.item} key={friend.id}>
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          status={friend.isOnline}
        />
      </li>
    ))}
  </ul>
)

export default FriendList

//------------------Ментор предложила переделать так
// const FriendList = ({ friends }) => (
// <ul className={s.list}>
// {friends.map((friend) => (
// <FriendListItem
//    key={friend.id}
//    avatar={friend.avatar}
//    name={friend.name}
//    status={friend.isOnline}
// />
// ))}
// </ul>
// )

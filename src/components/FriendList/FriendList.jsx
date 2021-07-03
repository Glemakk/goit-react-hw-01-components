import FriendListItem from './FriendListItem'
import s from './FriendList.module.css'

const FriendList = ({ friends }) => (
  <ul className={s.list}>
    {friends.map((friend) => (
      <FriendListItem
        id={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        status={friend.isOnline}
      />
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

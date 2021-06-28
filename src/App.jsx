import Profile from './components/Profile/Profile'
import StatisticList from './components/Statistics/StatisticList'
import FriendList from './components/Friend-list/FriendList'
import TransactionHistory from './components/Transaction/TransactionHistory'
// import Statistics from './components/Statistics/Statistics'
import user from './data/user.json'
import statsData from './data/statistical-data.json'
import friends from './data/friends.json'
import transactions from './data/transactions.json'

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <StatisticList title="Upload stats" stats={statsData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  )
}

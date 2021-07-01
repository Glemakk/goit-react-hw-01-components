import Profile from './components/Profile/Profile'
import StatisticList from './components/Statistics/StatisticList'
import FriendList from './components/FriendList/FriendList'
import TransactionHistory from './components/Transaction/TransactionHistory'
import Container from './components/Container/Container'
// import Statistics from './components/Statistics/Statistics'
import user from './data/user.json'
import statsData from './data/statistical-data.json'
import friends from './data/friends.json'
import transactions from './data/transactions.json'

export default function App() {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticList title="Upload stats" stats={statsData} />
      <StatisticList stats={statsData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  )
}

import PropTypes from 'prop-types'
import Statistics from './Statistics'
import s from '../Statistics/Statistics.module.css'

const StatisticList = ({ stats, title }) => (
  // можно задать title = 'Упс', тогда при отсутствии title будет именно эта строка
  <section className={s.section}>
    {title && <h2>{title}</h2>}

    <ul className={s.list}>
      {stats.map((stat) => (
        <li className={s.item} key={stat.id}>
          <Statistics label={stat.label} percentage={stat.percentage} />
        </li>
      ))}
    </ul>
  </section>
)

StatisticList.propTypes = {
  title: PropTypes.string,
}

export default StatisticList

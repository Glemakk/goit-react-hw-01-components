import PropTypes from "prop-types";
import s from "../Statistics/Statistics.module.css";

const Statistics = ({ label, percentage }) => (
  <div className={s.container}>
    <span className="label">{label}</span>
    <span className="percentage">{percentage}</span>
  </div>
);

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;

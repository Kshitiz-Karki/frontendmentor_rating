import PropTypes from 'prop-types'

const Rating = ({ rating, toggleIsheld }) => {
  return <div className={`circle flex-center bold ${rating.isHeld ? 'isHeld' : ''}`} onClick={() => toggleIsheld(rating.id)}>{rating.value}</div>
}

Rating.propTypes = {
  rating: PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    isHeld: PropTypes.bool.isRequired
  }),
  toggleIsheld: PropTypes.func.isRequired
}

export default Rating
// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {each} = props
  const {id, name, imageUrl} = each
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="teamDiv">
        <img src={imageUrl} className="img1" alt={name} />
        <p className="h1">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard

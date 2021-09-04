// Write your code here
import './index.css'

const MatchCard = props => {
  const {each} = props
  const {result, matchStatus, competingTeam, competingTeamLogo} = each
  return (
    <li className="matchDiv">
      <img src={competingTeamLogo} className="img2" alt="ma" />
      <h1 className="h1">{competingTeam}</h1>
      <p>{result}</p>
      <h3>{matchStatus}</h3>
    </li>
  )
}
export default MatchCard

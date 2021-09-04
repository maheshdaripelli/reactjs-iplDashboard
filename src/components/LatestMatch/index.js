// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latest} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latest

  return (
    <div className="latestMatchDiv">
      <div className="div1">
        <h1>{competingTeam}</h1>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img src={competingTeamLogo} alt="ma" className="img4" />
      <div className="div2">
        <h1 className="h2">First Innings</h1>
        <p className="p2">{firstInnings}</p>
        <h1 className="h2">Second Innings</h1>
        <p className="p2">{secondInnings}</p>
        <h1 className="h2">Man Of The Match</h1>
        <p className="p2">n{manOfTheMatch}</p>
        <h1 className="h2">Umpires</h1>
        <p className="p2">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch

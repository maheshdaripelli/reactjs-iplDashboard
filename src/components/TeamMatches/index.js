// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import MatchCard from '../MatchCard'
import LatestMatch from '../LatestMatch'
import './index.css'

class TeamMatches extends Component {
  state = {
    latestMatchDetails: {},
    teamBannerUrl: '',
    recentMatches: [],
    isBool: true,
  }

  componentDidMount() {
    this.matchApiDetails()
  }

  matchApiDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const x = data.latest_match_details
    const mainLatestMatchDetails = {
      umpires: x.umpires,
      result: x.result,
      manOfTheMatch: x.man_of_the_match,
      id: x.id,
      date: x.date,
      venue: x.venue,
      competingTeam: x.competing_team,
      competingTeamLogo: x.competing_team_logo,
      firstInnings: x.first_innings,
      secondInnings: x.second_innings,
      matchStatus: x.match_status,
    }
    const mainteamBannerUrl = data.team_banner_url
    const y = data.recent_matches
    const mainRecentMatches = y.map(each => ({
      umpires: each.umpires,
      result: each.result,
      man_of_the_match: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competing_team: each.competing_team,
      competing_team_logo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))
    this.setState({
      latestMatchDetails: mainLatestMatchDetails,
      teamBannerUrl: mainteamBannerUrl,
      recentMatches: mainRecentMatches,
      isBool: false,
    })
  }

  render() {
    const {
      latestMatchDetails,
      teamBannerUrl,
      isBool,
      recentMatches,
    } = this.state

    return (
      <div className="mainDivContainer" testid="loader">
        {isBool ? (
          <Loader
            testid="loader"
            type="Oval"
            color="#ffffff"
            height={50}
            width={50}
          />
        ) : (
          <div className="divCon">
            <img src={teamBannerUrl} className="img3" alt="team banner" />
            <LatestMatch latest={latestMatchDetails} />
            <ul className="MatchCardDiv" testid="loader">
              {recentMatches.map(each => (
                <MatchCard each={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches

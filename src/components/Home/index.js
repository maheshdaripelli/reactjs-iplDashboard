// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamsList: [], isBool: true}

  componentDidMount() {
    this.getDataFromApi()
  }

  getDataFromApi = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const mainData = data.teams
    const finalData = mainData.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      imageUrl: eachItem.team_image_url,
    }))
    this.setState({teamsList: finalData, isBool: false})
  }

  render() {
    const {teamsList, isBool} = this.state
    return (
      <div className="mainDiv" testid="loader">
        <div className="headDiv" testid="loader">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="img2"
            alt="ipl logo"
          />
          <h1>IPL Dashboard</h1>
        </div>
        <div>
          {isBool ? (
            <Loader
              testid="loader"
              type="Oval"
              color="#ffffff"
              height={50}
              width={50}
            />
          ) : (
            <ul className="mapDiv" testid="loader">
              (
              {teamsList.map(each => (
                <TeamCard each={each} uniqueKey={each.id} />
              ))}
              )
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default Home

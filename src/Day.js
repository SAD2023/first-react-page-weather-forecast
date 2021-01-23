import './day.css';
import cloudy from "./cloudy.png";
import sunny from "./sunny.png"
import stormy from "./stormy.png"

function Day() {
  return <div className="body-wrapper">
    <IndividualDay name="Friday" date="January 22nd" time="11 Pm" pic={cloudy} temp="41° F" description="Cloudy" />
    <IndividualDay name="Saturday" date="January 23rd" time="7 Pm" pic={sunny} temp="65° F" description="Very Clear" />
    <IndividualDay name="Sunday" date="January 24th" time="3 Pm" pic={stormy} temp="34° F" description="Light Thunders" />
    <IndividualDay name="Monday" date="January 25th" time="6 Am" pic={sunny} temp="63° F" description="Clear Sky" />
    <IndividualDay name="Tuesday" date="January 26th" time="9 Pm" pic={cloudy} temp="46° F" description="Light Rain" />
    <IndividualDay name="Wednesday" date="January 27th" time="11 Pm" pic={sunny} temp="60° F" description="Bright Day" />
    <IndividualDay name="Thursday" date="January 28th" time="12 Pm" pic={stormy} temp="38° F" description="Heavy Thunderstorms" />
  </div>
}


const IndividualDay = (props) => {
  return <div className="day-element">
    {props.name}
    <br />
    <div className="dateTime">
      {props.date + " " + props.time}
    </div>
    <div>
      <img src={props.pic} alt="cloudy" className="image cloudy" />
      <h3 className="temp">{props.temp}</h3>
      <p className="description">{props.description}</p>
    </div>

  </div>
}

export default Day;
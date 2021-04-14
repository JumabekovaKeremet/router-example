import classes from "./About.module.css";
import  img from "../../imges/about.jpg";
import  web from "../../imges/nasa-web.jpg";
import  logo from "../../imges/nasa-web-logo.png";


const About = () => {
    return ( 
        <div className={classes.About}>
            <h1>This is about page</h1>
            <li><img src = {img} alt = ""/></li>
            <h2>Symbols of NASA</h2>
            <div className={classes.about1}>
                <div>
                <p>From the wing of the space shuttle to the top of the NASA homepage, the agency's official insignia is probably its best-known symbol.

The round red, white and blue insignia, nicknamed the "meatball," was designed by employee James Modarelli in 1959, NASA's second year. The design incorporates references to different aspects of the mission of the National Aeronautics and Space Administration. The round shape of the insignia represents a planet. The stars represent space. The red v-shaped wing represents aeronautics. The circular orbit around the agency's name represents space travel.

NASA 'worm' insignia
NASA used the "worm" logo from 1975 until 1992.
Credits: NASA
After it was introduced, the "meatball" was the most common symbol of NASA for 16 years, but in 1975 NASA decided to create a more "modern" logo. That logo, which consisted of the word "NASA" in a unique type style, was nicknamed the "worm." That logo was retired in 1992, and the classic meatball insignia has been the most common agency symbol since.

National Aeronautics and Space Administration seal
The NASA seal is used for formal agency events.
Credits: NASA
In addition to the insignia, NASA has another official symbol. If the meatball is the everyday face of NASA, the NASA seal is the dressed-up version. The NASA administrator uses the seal for formal purposes such as award presentations and ceremonies. Like the meatball insignia, the seal also includes planet, stars, orbit and vector elements.

STS-1 mission patch
Shuttle crews design patches for their missions, like this one used for the very first shuttle launch.
Credits: NASA
NASA also uses symbols for specific projects within the agency. Each space shuttle crew designs a patch that represents what it will do during the mission. Some robotic probes sent to explore space have had mission patches.

NASA 60th logo
Official logo to mark NASA's 60th anniversary of its establishment as a U.S. government agency.
Credits: NASA
The agency also creates symbols for major events, like the NASA 60th anniversary in 2018. Created by NASA graphic artist Matthew Skeins, the logo depicts how NASA is building on its historic past to soar toward a challenging and inspiring future.

More About NASA Symbols
NASA "Meatball" Logo   →
Mission Patches   →
NASA eBook, Emblems of Exploration: Logos of the NACA and NASA
NASA's January, 1976 Graphics Standards Manual
NASA Releases Logo for Upcoming 60th Anniversary
NASA 60th Anniversary</p>
</div>
<div>
<li><img src = {web} alt = ""/></li>
            <li><img src = {logo} alt = ""/></li>
            </div>
            </div>
        </div>
    );
}
 
export default About;
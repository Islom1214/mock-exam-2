import FirstImage from "../../assets/images/team/1.png"
import SecondImage from "../../assets/images/team/2.png"
import ThirdImage from "../../assets/images/team/3.png"
import FourthImage from "../../assets/images/team/4.jpg"
import FifthImage from "../../assets/images/team/5.jpg"
import SixthImage from "../../assets/images/team/6.jpg"
import "./style.scss"

function Team(props) {
    return (
        <div id="teams">
            <p className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nobis quas necessitatibus, repellat esse odit impedit sed alias repudiandae. Iste est sapiente corrupti. Quam eveniet vel cupiditate, nesciunt dolore impedit, voluptatibus exercitationem, accusantium aut nulla quae sit fugit. Accusamus commodi eum ea minus id reiciendis ex quia ipsum similique ipsa!</p>
            <div className="teams-wrapper">
                <div className="images">
                    <div className="member">
                        <img src={FirstImage} alt="Member" width={150} height={150} />
                        <h4>Эржан Мусин</h4>
                        <p>CEO</p>
                    </div>
                    <div className="member">
                        <img src={SecondImage} alt="Member" width={150} height={150} />
                        <h4>Олжас Укенов</h4>
                        <p>CEO</p>
                    </div>
                    <div className="member">
                        <img src={ThirdImage} alt="Member" width={150} height={150} />
                        <h4>Бродяга Хасанов</h4>
                        <p>CEO</p>
                    </div>
                    <div className="member">
                        <img src={FourthImage} alt="Member" width={150} height={150} />
                        <h4>EsedNode Muxaev</h4>
                        <p>CEO</p>
                    </div>
                    <div className="member">
                        <img src={FifthImage} alt="Member" width={150} height={150} />
                        <h4>Dominik Toretto</h4>
                        <p>CEO</p>
                    </div>
                    <div className="member">
                        <img src={SixthImage} alt="Member" width={150} height={150} />
                        <h4>Alisher Xujanov</h4>
                        <p>CEO</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;
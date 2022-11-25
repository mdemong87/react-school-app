import img from "../../../img/profile.jpg";
import "./profile.css";
export default function Profile() {
    return (

        <div class="profilewrp">
            <div>
                <div class="mainiiiTitle">
                    <h4>Head of Organization</h4>
                </div>
                <div class="headTeacherImg ">
                    <img className="headTImg" src={img} alt="" />
                </div>
                <div class="teacherName">
                    <h4>Md.mijanur Rahaman</h4>
                </div>
            </div>
        </div>

    )
}

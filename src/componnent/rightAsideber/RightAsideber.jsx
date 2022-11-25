import Payment from "./payment/Payment";
import Profile from "./profile/Profile";
import "./rightAsideber.css";

export default function RightAsideber() {
    return (
        <div className="rightAsidewrp">
            <Profile />
            <Payment />
        </div>
    )
}

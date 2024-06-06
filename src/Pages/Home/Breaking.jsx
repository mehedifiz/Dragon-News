import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const Breaking = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100}>
            <Link>IMatch Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
            <Link>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
</Marquee>
        </div>
    );
};

export default Breaking;
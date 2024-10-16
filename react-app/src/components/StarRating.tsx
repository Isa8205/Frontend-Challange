import { Star } from "lucide-react";

function StarRating() {
  return (
    <>
      <div className="star-container">
        <span className="heading">User Rating</span>
        <span className="star">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </span>

        <p>4.1 on an avarage of 581</p>

        <hr />

        <ul className="column">
          <li className="row">
            <span className="star-count col-2">5 star</span>
            <span className="star-bar-1 col-8">
              <span></span>
            </span>
            <span className="count-number col-2">500</span>
          </li>
          <li className="row">
            <span className="star-count col-2">4 star</span>
            <span className="star-bar-1 col-8">
              <span></span>
            </span>
            <span className="count-number col-2">321</span>
          </li>
          <li className="row">
            <span className="star-count col-2">3 star</span>
            <span className="star-bar-1 col-8">
              <span></span>
            </span>
            <span className="count-number col-2">480</span>
          </li>
          <li className="row">
            <span className="star-count col-2">2 star</span>
            <span className="star-bar-1 col-8">
              <span></span>
            </span>
            <span className="count-number col-2">123</span>
          </li>
          <li className="row">
            <span className="star-count col-2">1 star</span>
            <span className="star-bar-1 col-8">
              <span></span>
            </span>
            <span className="count-number col-2">54</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default StarRating;

import "./SubscriptionCard.css";
const SubscriptionCard = (props) => {
  return (
    <>
      <div>
        <div className="sub-sub-card">
          <div className="sub-sub-card-heading">
            <div className="sub-sub-card-heading-title">
              <div>{props.title}</div>
              <div className="sub-sub-card-heading-subtitle">
                {props.subTitle}
              </div>
            </div>
            <div className="sub-sub-card-heading-amount">
              ₹{props.amount}
              <div className="sub-sub-card-heading-duration">
                {props.duration}
              </div>
            </div>
          </div>
          <img alt="" className="sub-sub-card-img" src={props.imageUrl} />
        </div>
      </div>
    </>
  );
};
export default SubscriptionCard;

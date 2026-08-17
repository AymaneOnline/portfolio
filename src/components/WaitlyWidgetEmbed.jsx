const WaitlyWidgetEmbed = ({ waitlistId }) => {
  return (
    <div className="py-12 px-5 flex justify-center">
      <div className="gw-widget" data-waitlist-id={waitlistId}></div>
    </div>
  );
};

export default WaitlyWidgetEmbed;
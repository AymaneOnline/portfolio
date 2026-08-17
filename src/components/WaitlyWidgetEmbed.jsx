const WaitlyWidgetEmbed = ({ waitlistId, widgetType }) => {
  return (
    <div className="py-12 px-5 flex justify-center">
      <div
        className="gw-widget"
        data-waitlist-id={waitlistId}
        data-widget-type={widgetType}
      ></div>
    </div>
  );
};

export default WaitlyWidgetEmbed;
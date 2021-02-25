const Screen = ({input}) => {
  return (
    <div className="form_row">
      <input type="text" value={input} className="screen_input"   disabled />
    </div>
  );
};
 
export default Screen;

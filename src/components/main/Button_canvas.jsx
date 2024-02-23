import PropTypes from "prop-types";
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



const Button_canvas = ({ toggleStarBackground }) => {
  return (
    <>
      <div className="fixed top-12 left-[1900px] text-[#676767]">
        <button onClick={toggleStarBackground}>.</button>
      </div>
    </>
  );
};
Button_canvas.propTypes = {
  toggleStarBackground: PropTypes.func.isRequired,
};
export default Button_canvas;

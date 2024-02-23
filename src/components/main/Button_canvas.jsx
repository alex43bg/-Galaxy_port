import PropTypes from "prop-types";
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



const Button_canvas = ({ toggleStarBackground }) => {
  return (
    <>
      <div className="fixed top-20 left-[1900px] z-1000 text-gray-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-300">
        <button onClick={toggleStarBackground}>*</button>
      </div>
    </>
  );
};
Button_canvas.propTypes = {
  toggleStarBackground: PropTypes.func.isRequired,
};
export default Button_canvas;

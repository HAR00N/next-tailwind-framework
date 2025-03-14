import PropTypes from "prop-types";
import LoadingSpinner from "@/components/ui/LoadingSpinner.jsx";

const BaseLoadingBar = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-200 flex items-center justify-center bg-black/30">
      <LoadingSpinner size={16} />
    </div>
  );
};

BaseLoadingBar.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default BaseLoadingBar;

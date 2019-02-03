import PropTypes from 'prop-types';

const Template = ({ visible, children }) => {
    if (!visible) {
        return null;
    }
    if (children) {
        return children;
    }
    return null;
};

Template.propTypes = {
    visible: PropTypes.bool
};

export default Template;

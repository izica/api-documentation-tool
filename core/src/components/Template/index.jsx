const Template = ({ visible, children }) => {
  if (!visible) {
    return null;
  }
  return children;
};

export default Template;

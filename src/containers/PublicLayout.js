import React from "react";

const PublicLayout = (WrappedComponent) => (props) => {
  return <WrappedComponent {...props} />;
};

export default PublicLayout;

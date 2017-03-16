import React from 'react';

const LinkComponent = ({obj}) => (
  <a href={obj.url} target="_blank">
    <p>{obj.icon}</p>
    <p>{obj.value}</p>
    <p>{obj.service}</p>
  </a>
);

LinkComponent.propTypes = {
  obj: React.PropTypes.object.isRequired,
};

export default LinkComponent;

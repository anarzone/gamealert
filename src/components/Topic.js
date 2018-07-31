import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line 
import { Link } from 'react-router-dom';

const Topic = ({ topicId, topicName }) => (
  <Link className="topic__title" to={`topics/${topicId}`}>
    <div className="tc bg-hot-pink f1 lh-title dib br-pill pa4 ma2 grow bw2 shadow-5">
      {topicName}
    </div>
  </Link>
);

Topic.propTypes = {
  topicId: PropTypes.string.isRequired,
  topicName: PropTypes.string.isRequired,
};

export default Topic;

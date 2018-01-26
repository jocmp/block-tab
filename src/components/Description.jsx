import React from 'react';
import ImageZoom from 'react-medium-image-zoom';
import PropTypes from 'prop-types';

const Description = (props) => (
  <div>
    <div dangerouslySetInnerHTML={ { __html: props.description } } />
    { !!media &&
      <ImageZoom
        image={ {
          src: props.media,
          className: 'img',
          style: { width: '20em' }
        } }
      />
    }
  </div>
);

Description.propTypes = {
  description: PropTypes.string.isRequired,
  media: PropTypes.string
};


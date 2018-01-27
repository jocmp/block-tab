import React from 'react';
import ImageZoom from 'react-medium-image-zoom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Description = ({ tab, active }) => {
  const { text, media } = tab;
  return (
    <div className={ classNames('description', { 'description--active': active }) }>
      <div className={ classNames('description__content', { 'description__content--active': active }) }>
        <div dangerouslySetInnerHTML={ { __html: text } } />
        { !!media &&
          <figure className="description__figure">
            <ImageZoom
              image={ {
                src: media,
                className: 'description__media'
              } }
            />
          </figure>
        }
      </div>
    </div>
  );
};

Description.propTypes = {
  active: PropTypes.bool.isRequired,
  tab: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    media: PropTypes.string
  })
};

export default Description;

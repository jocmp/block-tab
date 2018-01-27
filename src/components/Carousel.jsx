import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import classNames from 'classnames';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { canScrollLeft: false, canScrollRight: true };

    this.scrollToStart = this.scrollToStart.bind(this);
    this.scrollToEnd = this.scrollToEnd.bind(this);
    this.updateScrollOptions = this.updateScrollOptions.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateScrollOptions);
    this.carousel.addEventListener('scroll', this.updateScrollOptions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateScrollOptions);
    this.carousel.removeEventListener('scroll', this.updateScrollOptions);
  }

  updateScrollOptions() {
    this.setState({
      canScrollLeft: this.carousel.scrollLeft > 0,
      canScrollRight: this.carousel.scrollLeft != (this.carousel.scrollWidth - this.carousel.clientWidth)
    });
  }

  scrollToStart() {
    this.carousel.scrollBy({ left: -this.carousel.scrollWidth, behavior: 'smooth' });
    this.updateScrollOptions();
  }

  scrollToEnd() {
    this.carousel.scrollBy({ left: this.carousel.scrollWidth, behavior: 'smooth' });
    this.updateScrollOptions();
  }

  render() {
    return (
      <div className="carousel__wrapper">
        <div className="carousel" ref={ (carousel) => { this.carousel = carousel; } }>
          { this.props.tabs.map((tab, index) =>
            <span
              key={ index }
              onClick={ this.props.onTabClick(tab.id) }
              className={ classNames('carousel__tab', { 'carousel__tab--selected': tab.id === this.props.selectedTabId }) }>
              { tab.title }
            </span>
          ) }
        </div>
        <button
          className={ classNames('carousel__button', 'btn--left', { 'btn--more': this.state.canScrollLeft }) }
          onClick={ this.scrollToStart }>
          <i className="indicator fa fa-chevron-left" />
        </button>
        <button
          className={ classNames('carousel__button', 'btn--right', { 'btn--more': this.state.canScrollRight }) }
          onClick={ this.scrollToEnd }>
          <i className="indicator fa fa-chevron-right" />
        </button>
      </div>
    );
  }
}

export default Carousel;

Carousel.propTypes = {
  selectedTabId: PropTypes.string,
  onTabClick: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    media: PropTypes.string
  })).isRequired
};

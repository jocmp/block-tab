import React from 'react';
import PropTypes from 'prop-types';

class TabBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
    this.scrollToStart = this.scrollToStart.bind(this);
    this.scrollToEnd = this.scrollToEnd.bind(this);
  }

  componentWillMount() {
    this.props.fetchTabGroup('1');
  }

  scrollToStart() {
    this.carousel.scrollBy({ left: -this.carousel.clientWidth, behavior: 'smooth' });
  }

  scrollToEnd() {
    this.carousel.scrollBy({ left: this.carousel.clientWidth, behavior: 'smooth' });
  }

  render() {
    return (
      <div className="block-tab__container">
        <div className="block-tab__row">
          <div className="block-tab__wrapper">
            <div className="carousel__wrapper">
              <button className="carousel__button btn--left" onClick={ this.scrollToStart }>{ '<-' }</button>
              <div className="carousel" ref={ (carousel) => { this.carousel = carousel; } }>
                { this.props.tabGroup.tabs.map((tab) =>
                  <span key={ tab.id } className="carousel__tab">{ tab.title }</span>
                ) }
              </div>
              <button className="carousel-button btn--right" onClick={ this.scrollToEnd }>{ '->' }</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TabBlock.propTypes = {
  fetchTabGroup: PropTypes.func.isRequired,
  tabGroup: PropTypes.shape({
    tabs: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      media: PropTypes.string
    }))
  })
};


export default TabBlock;
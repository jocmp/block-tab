import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import Carousel from './Carousel';
import Description from './Description';

class TabBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTabId: ''
    };

    this.onTabClick = this.onTabClick.bind(this);
  }

  componentWillMount() {
    this.props.fetchTabGroup('1');
  }

  componentWillReceiveProps(nextProps) {
    if (_.isEmpty(this.state.selectedTabId)) {
      this.setState({ selectedTabId: _.defaults(_.first(nextProps.tabGroup.tabs), { id: '' }).id });
    }
  }

  onTabClick(selectedTabId) {
    return () => {
      this.setState({ selectedTabId });
    };
  }

  render() {
    return (
      <div className="block-tab__container">
        <div className="block-tab__row">
          <div className="block-tab__wrapper">
            <Carousel
              tabs={ this.props.tabGroup.tabs }
              onTabClick={ this.onTabClick }
              selectedTabId={ this.state.selectedTabId } />
            <div className="description__wrapper">
              { this.props.tabGroup.tabs.map(tab =>
                <Description key={ tab.id } tab={ tab } active={ tab.id == this.state.selectedTabId } />
              ) }
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
      text: PropTypes.string.isRequired,
      media: PropTypes.string
    })).isRequired
  })
};


export default TabBlock;
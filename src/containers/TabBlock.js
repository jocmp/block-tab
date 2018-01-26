import { connect } from 'react-redux';
import TabBlock from '../components/TabBlock';
import { fetchTabGroup } from '../actions/BlockActions';

const mapStateToProps = ({ block }) => ({
  tabGroup: block
});

const mapDispatchToProps = (dispatch) => ({
  fetchTabGroup: (id) => dispatch(fetchTabGroup(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabBlock);
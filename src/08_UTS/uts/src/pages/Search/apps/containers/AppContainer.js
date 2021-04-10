import { connect } from 'react-redux';
import Search from '../components/search';

import { fetchImage } from '../modules/actions';

export default connect(
  ({ app }) => ({ ...app }),
  (dispatch) => ({
    fetchImage: (keyword) => dispatch(fetchImage(keyword)),
  }),
)(Search);


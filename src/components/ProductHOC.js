import { connect } from 'react-redux';
import Product from './Product';
import setMessageContact from '../redux/actions';

const mapStateToProps = (state, ownProps) => {
  console.log(state, ownProps);
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    setMessageContact: contact => {
      dispatch(setMessageContact(contact))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Product)

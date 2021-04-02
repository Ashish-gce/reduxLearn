//  connect both react and redux
import { connect } from 'react-redux';

// V. V. Imp. 
//  In Redux, <Home /> Component is not using directly in our project
//  We use this from "Container" ( i.e.: responsible for 'connection' b/w "Components" and "Services ") folder
//  So, 1st we send "Home" Component to 'container' and then we import them from there.

import Header from '../Components/Header';

//  Now, we are going to use "mapStateToProps" and "mapDispatchToProps"
const mapStateToProps = state => ({
    data: state.CardItems
})
const mapDispatchToProps = dispatch => ({

})

// In early call we pass (Home) <Home /> Componemt, because all of these perform on/from Home page.
export default connect(mapStateToProps, mapDispatchToProps)(Header);



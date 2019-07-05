/*importing libraries*/

import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export class Header extends React.Component{
    render() {

        return(

            <div className="header container-fluid">
                <h1>{this.props.myName}</h1>
            </div>


        );
    }
}

export default Header;
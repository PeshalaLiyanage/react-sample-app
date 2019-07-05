
/*importing libraries*/
import * as React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header';
import Cal from "./Cal";

export class Root extends React.Component{
    constructor( props ) {

        super(props);

        this.state = {
            headerName : 'Maths Class'
        };

    }

    render() {

        return(
            <div className="container">
                <div className="">
                    <Header myName={this.state.headerName } />
                </div>

                <div className="">

                    <Cal operation={"Add"} />

                </div>
                <div className="">

                    <Cal operation={"Substract"} />
                </div>

                <div className="">

                    <Cal operation={"Multiply"} />
                </div>
                <div className="">

                    <Cal operation={"Divide"} />
                </div>

            </div>


        );
    }
}

export default Root;
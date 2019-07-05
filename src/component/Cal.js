/*importing libraries*/

import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export class Cal extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            valueOne : 0,
            valueTwo : 0,
            result : 0,
            operation : props.operation ? props.operation : 'Add',
            message:''
        };
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {

        let state = this.state;
        state[ event.target.name ] = event.target.value;

        var valOne = parseInt(state.valueOne);
        var valTwo = parseInt(state.valueTwo);

        if ( state.valueOne !== '' && state.valueTwo !==''){

            let result = 0;
            var message = '';

            if( this.state.operation === 'Add' ) {
                result = valOne + valTwo;

            } else if( this.state.operation === 'Multiply' ) {
                result = valOne * valTwo;
            }else if(this.state.operation === 'Substract'){
                result = valOne - valTwo;
            }else if(this.state.operation === 'Divide'){
                if (valTwo!==0){
                    result = valOne / valTwo;
                    message = '';
                } else {
                    message = 'Number two cannot be equal to zero'

                }

            }

            this.setState({
                valueOne : state.valueOne,
                valueTwo : state.valueTwo,
                result:result,
                message : message
            });
        }else{
            this.setState({
                result:'',

            });
        }

    }


    render() {

        return(
            <div className="form">
                <form onSubmit={this.handleSubmit}>

                    <div className='innerContainer'>
                        <p className="title">{this.state.operation}</p>&nbsp;&nbsp;
                        <label>
                            Number One: &nbsp;
                            <input type="text" value={this.state.valueOne} onChange={this.handleChange} name="valueOne" />
                        </label>&nbsp;&nbsp;&nbsp;
                        <label>
                            Number Two:&nbsp;
                            <input type="text" value={this.state.valueTwo} onChange={this.handleChange} name="valueTwo"/>
                        </label>
                    </div>


                </form>

                <div className='result'>
                    <label htmlFor="">Result: </label>
                    <label htmlFor="">{this.state.result}</label>
                </div>
                <div className='error'>

                    <label htmlFor="" id='messageOne'>{this.state.message}</label>
                </div>
            </div>

        );
    }
}

export default Cal;
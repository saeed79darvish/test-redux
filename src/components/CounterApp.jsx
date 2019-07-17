import React from 'react'
import { connect } from 'react-redux'
import { funcDecrement, funcIncrement } from '../action/countAction'


const CounterApp = ({ counter, funcDecrement, funcIncrement }) => {

    return (
        <div>
            <button onClick={funcIncrement}>+</button>
            <button onClick={funcDecrement}>-</button>
            <div>
                <h1>{counter}</h1>
            </div>
        </div>
    )


}
const mapStateToProps = state => ({
    counter: state.counter

})
export default connect(mapStateToProps, { funcDecrement, funcIncrement })(CounterApp);


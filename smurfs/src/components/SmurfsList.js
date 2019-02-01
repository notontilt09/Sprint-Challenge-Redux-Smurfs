import React from 'react'
import { connect } from 'react-redux'
import { getSmurfs } from '../actions'

class SmurfsList extends React.Component {
    componentDidMount() {
        this.props.getSmurfs()
    }

    render() {
        return (
            <h1>SmurfsList</h1>
        )
    }
}

const mapStateToProps = state => ({
    smurfs: state.smurfs
})

export default connect(mapStateToProps, { getSmurfs })(SmurfsList)
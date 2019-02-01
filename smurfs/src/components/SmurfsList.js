import React from 'react'
import { connect } from 'react-redux'
import { getSmurfs } from '../actions'
import Smurf from './Smurf'

class SmurfsList extends React.Component {
    componentDidMount() {
        this.props.getSmurfs()
    }

    render() {
        return (
            <div className="smurfs-list">
                {this.props.smurfs.map((smurf, index) =>
                     <Smurf key={index} smurf={smurf} />
                )}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    smurfs: state.smurfs
})

export default connect(mapStateToProps, { getSmurfs })(SmurfsList)
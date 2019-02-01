import React from 'react'
import { connect } from 'react-redux'
import { getSmurfs, deleteSmurf } from '../actions'
import Smurf from './Smurf'

class SmurfsList extends React.Component {
    componentDidMount() {
        this.props.getSmurfs()
    }

    deleteSmurf = (e, id) => {
        e.preventDefault();
        this.props.deleteSmurf(id)
    }

    render() {
        return (
            <div className="smurfs-list">
                {this.props.smurfs.map((smurf, index) =>
                     <Smurf key={index} deleteSmurf={this.deleteSmurf} smurf={smurf} />
                )}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    smurfs: state.smurfs
})

export default connect(mapStateToProps, { getSmurfs, deleteSmurf })(SmurfsList)
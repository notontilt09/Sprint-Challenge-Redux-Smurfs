import React from 'react'
import { connect } from 'react-redux'
import { getSmurfs, deleteSmurf, updateSmurf, populateForm } from '../actions'
import Smurf from './Smurf'

class SmurfsList extends React.Component {
    state = {
        changeSmurf: {}
    }

    componentDidMount() {
        this.props.getSmurfs()
    }

    deleteSmurf = (e, id) => {
        e.preventDefault();
        this.props.deleteSmurf(id)
    }

    populateForm = (e, smurf) => {
        e.preventDefault();
        this.props.populateForm(smurf);
    }

    render() {
        return (
            <div className="smurfs-list">
                {this.props.smurfs.map((smurf, index) =>
                     <Smurf 
                        key={index} 
                        deleteSmurf={this.deleteSmurf} 
                        smurf={smurf} 
                        updatingSmurf={this.props.updatingSmurf} 
                        changeSmurf={this.state.changeSmurf}
                        updateSmurf={this.props.updateSmurf}
                        populateForm={this.populateForm}
                    />
                )}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    smurfs: state.smurfs,
    updatingSmurf: state.updatingSmurf
})

export default connect(mapStateToProps, { getSmurfs, deleteSmurf, updateSmurf, populateForm })(SmurfsList)
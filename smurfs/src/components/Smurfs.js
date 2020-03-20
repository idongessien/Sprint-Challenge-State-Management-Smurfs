import React from 'react';
import { connect } from 'react-redux';
import {fetchState} from '../actions';
import axios from 'axios';
import SmurfForm from './SmurfForm';

const Smurfs = props => {

    const handleSubmit = (values) => {
        console.log("Submitting...", values)
        axios.post("http://localhost:3333/smurfs", values)
        .then(response => {
            console.log(response)
            props.fetchState(values)
        })
        .catch(error => console.log(error.response))
        console.log(values)
    }

    const addNewSmurf = smurf => {
        const newSmurf = {
            id: Date.now(),
            name: smurf.name,
            age: smurf.age,
            height: smurf.height
        }
        handleSubmit(newSmurf)
    }

    return (
        <div>
            <button onClick={props.fetchState}>Load Smurfs</button>

            <SmurfForm addNewSmurf={addNewSmurf} />

          {
            props.smurfs && !props.isLoading && props.smurfs.map(s => {
            return (
                <div key={s.id}>
                    <h2>Name: {s.name}</h2>
                    <p>Age: {s.age}</p>
                    <p>Height: {s.height}</p>
                </div>
              )
            })
            }
        </div>
        
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {fetchState})(Smurfs);
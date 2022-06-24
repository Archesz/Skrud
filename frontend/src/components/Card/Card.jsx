import React from 'react'
import './Card.scss'

function Card(props){
    return (
        <div className="card-container">

            <div className="card-header">

                <span className="card-name">{props.name}</span>
                
                <div className="card-icon">
                    <img className="card-icon-img" src={props.url}/>                    
                </div>

            </div>

            <div className="card-body">

                <span className="card-info">Nível: {props.nivel} · {props.area}</span>

                <span className="card-descript">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</span>

            </div>

            <div className="card-footer">

            </div>

        </div>
    )
}

export default Card
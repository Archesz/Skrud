import React, { useState } from 'react'
import '../styles/main.scss'
import Skills from '../Data/Skills.json'
import Card from '../components/Card/Card';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getAreas(skills){
    let areas = [];
    for(let i = 0; i != skills.length; i++){
        if(areas.includes(skills[i]["Area"]) == false){
            areas.push(skills[i]["Area"]);
        }
    }
    return areas;
}

const skills = Skills["Skills"]

function Main() {

    const [text, setText] = useState('');
    const [tag, setTag] = useState('');
    const areas = getAreas(skills);

    function changeText() {
        let text = document.querySelector("#searchText").value
        text = capitalizeFirstLetter(text)
        setText(text)
    }

    function changeTag(){
        let tag = document.querySelector("#searchTag").value
        setTag(tag)
    }

    return (

        <div className="container">

            <div className="skills-search">
                <div className="input-group">
                    <label className="label">Name: </label>
                    <input type="text" className="input-skills" placeholder="Ex: Python" onChange={changeText} id="searchText" />
                </div>

                <div className="input-group">
                    
                    <label className="label">Área</label>
                    <select className="select-tag" onChange={changeTag} id="searchTag">
                        <option value=""></option>
                        {areas.map((area, i) => {
                            return(
                                <option value={area} key={i}>{area}</option>
                            )
                        })}
                    </select>

                </div>

                <button className="btn btn-primary">Adicionar</button>

            </div>

            <div className="skills-area">

                {skills.map((skill, index) => {

                    if (skill["Name"].indexOf(text) != -1 && skill["Area"].indexOf(tag) != -1){
                        return (
                            <Card name={skill["Name"]} nivel={skill["Nivel"]} area={skill["Area"]} url={skill["URL"]} key={index} />
                        )
                    }
                })}


            </div>

        </div>

    )
}

export default Main
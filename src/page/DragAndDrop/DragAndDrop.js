import React  from 'react';
import Breadcumb from '../../components/Breadcumb';
import Element from './Element';
import { useDrop } from 'react-dnd';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Select from '../../components/Select';
import Container from './Container';
import Checkbox from '../../components/Checkbox';

import Radio from '../../components/Radio';
const DragAndDrop = () => {
    const [genrateCode, setGenrateCode] = React.useState("Genrate Your Code:");
    const [element, setElement] = React.useState([
        { name: <Input/> },
        { name: <Button/> },
        { name: <Select/> },
        {name: <Checkbox/>},
        {name: <Radio/> }
    ]);

    const [container, setContainer] = React.useState([]);


    //setp 1

    const [{ isOver }, addToTeamRef] = useDrop({
        accept: "element",
        collect: (monitor) => ({ isOver: !!monitor.isOver() }),
      });


      const [{ isOver: isPlayerOver }, removeFromTeamRef] = useDrop({
        accept: "container",
        collect: (monitor) => ({ isOver: !!monitor.isOver() }),
      });


 //move to another container
 const movePlayerToTeam = (item) =>{
  setContainer((prev) => [...prev, item]);

 }

 //remove from another container
 const removePlayerFromTeam = (item) =>{
    setContainer((prev) => prev.filter((_, i) => item.index !== i));
 }

 //working on container for code genrate part ------------------>
 const handleGenrateCode = () =>{
    const code = document.getElementById('code').innerHTML;
     let staticCode = code ? `<form>${code}</form>` : <p style={{color:'red', fontWeight:300}}>please Drag some Element</p>
    setGenrateCode(staticCode);
 }

 return (
        <>
            <Breadcumb
            title="Drag and Drop"
            button = "true"
            buttonTitle="Genrate code"
            onClick={handleGenrateCode}

            />
            <div className='row'>
                <div className="col-lg-2 col-xlg-3 col-md-5" style={{background: "#fff", padding:'10px'}} ref={removeFromTeamRef}>

                   {element.map((p,i) => (
                       <Element
                       item={p}
                       key={i}
                       index = {i}
                       elementType='element'
                       onDropPlayer = {movePlayerToTeam}
                       />
                   ))}
                </div>
                <div  id='code' className="col-lg-4 col-xlg-3 col-md-5" style={{background: "#fff", padding:'10px', marginLeft:'20px'}} ref={addToTeamRef}>
                   {container.map((p,i) => (
                       <Element
                       item={p}
                       key={i}
                       index = {i}
                       elementType = 'container'
                       onDropPlayer = {removePlayerFromTeam}
                       />
                   ))}
                </div>
                <Container code = {genrateCode}/>

            </div>
        </>
    );
};

export default DragAndDrop;

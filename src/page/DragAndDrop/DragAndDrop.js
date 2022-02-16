import React, { useCallback }  from 'react';
import Breadcumb from '../../components/Breadcumb';
import Element from './Element';
import { useDrop } from 'react-dnd';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Select from '../../components/Select';
import Container from './Container';
import Checkbox from '../../components/Checkbox';

const DragAndDrop = () => {
    const [jsonArray, setJsonArray] =  React.useState([]);
    const[elementType, setElementType] = React.useState({});
    const[elementData, setElementData] = React.useState(null);
    const [genrateCode, setGenrateCode] = React.useState("Genrate Your Code:");
    const [element, setElement] = React.useState([
        { name: <Input/> },
        { name: <Button/> },
        { name: <Select/> },
        {name: <Checkbox/>},
    ]);
    const [container, setContainer] = React.useState([]);

    //logic for jsonObject

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
  let object = {
      ...item.name.type().props.children.props,
      id:Math.floor(1000 + Math.random() * 9000),
      name:elementData.name ? elementData.name : item.name.type().props.children.props.name,
      placeholder: elementData.placeholder ? elementData.placeholder : item.name.type().props.children.props.placeholder,
      label: elementData.label ? elementData.label : item.name.type().porps.children.props.name,
      type: item.name.type().props.children.props.class === 'form-check' ? 'checkbox' : item.name.type().props.children.props.type,
  }
  setElementType(object);
  setJsonArray((prev) => [...prev, object]);
 }
const result = JSON.stringify(jsonArray);
console.log(result);

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

//input data
const handleElementData = useCallback((item, setFormData) =>{
    setElementData(item);
  setFormData({
    name:'',
    label:'',
    placeholder:''
  });
},[]);

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
                <Container code = {genrateCode} handleElementData = {handleElementData}/>

            </div>
        </>
    );
};

export default DragAndDrop;

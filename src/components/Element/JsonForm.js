import React, { useState, useEffect } from 'react';
import formJson from '../../form.json';
import { FormContext } from '../Formcontext';
import Element from '../Element/Element';
const JsonForm = () => {
    const [elements, setElements] = useState(null);

    useEffect(() => {
        setElements(formJson)

      }, [])

      const { fields } = elements ?? {}
      const handleSubmit = (event) => {
        event.preventDefault();

        console.log(elements)
      }

      const handleChange = (id, event) => {
        const newElements = { ...elements }
        newElements.fields.forEach(field => {
          const { type, id } = field;
          if (id === id) {
            switch (type) {
              case 'checkbox':
                field['value'] = event.target.checked;
                break;

              default:
                field['value'] = event.target.value;
                break;
            }


          }
          setElements(newElements)
        });
        console.log(elements)
      }
  return (
    <FormContext.Provider value={{ handleChange }}>
    <div className="App container">
      <h3>Genrated form by json</h3>
      <form>
        {fields ? fields.map((field, i) => <Element key={i} field={field} />) : null}
        <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>

    </div>
  </FormContext.Provider>
  )
}

export default JsonForm
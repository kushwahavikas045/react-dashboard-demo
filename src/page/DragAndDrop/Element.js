import React from 'react';
import { useDrag } from "react-dnd";
const Element = ({item, elementType, onDropPlayer, index}) => {

    const [{ isDragging }, dragRef] = useDrag({
        type: elementType,
        item: () => ({ ...item, index }),
        end: (item, monitor) => {
          const dropResult = monitor.getDropResult();

          if (item && dropResult) {
            onDropPlayer(item);
          }
        },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
      });
  return (
      <div className='card'  ref={dragRef}>
         {item.name}
      </div>
  );
};

export default Element;

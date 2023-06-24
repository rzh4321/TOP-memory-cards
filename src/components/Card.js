import React from 'react'

function Card({obj, clickHandler, showNames}) {
    const styles = {
        backgroundImage: `url(${obj.url})`,
        backgroundSize: "cover",
        backgroundPosition: (obj.pos === undefined)? "center": obj.pos,
    }
    return (
        <>
          <div className="card" onClick={() => clickHandler(obj.name)}>
            <div className={`img${showNames ? '' : ' full-img'}`} style={styles}></div>
            {showNames && <span>{obj.name}</span>}
          </div>
        </>
      );
      
}

export default Card;
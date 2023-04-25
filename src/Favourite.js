import React from 'react'
import { useSelector } from 'react-redux'

function Favourite() {

  const fev = useSelector(state => state.fav);
  if (fev.length == 0) return <h1>There is no fav</h1>

  console.log(fev)
  return (
    <div className="App">

      <div className='Gallery'>



        {
          fev.map((item) => {


            return (
              <>
                
                


                <img  className='image' key={item.id} src={item.url} />


              </>
            )
          })
        }
      </div>

    </div>
  );
  
}

export default Favourite

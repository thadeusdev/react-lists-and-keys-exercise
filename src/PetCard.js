import React from 'react'

// render a <li> for each element in the favSnacks array
// remember to use a unique key prop

function PetCard(props) {
  console.log(props.favSnacks)

  const snackList = props.favSnacks.map((snack) => {
    return <li key={snack}>{snack}</li>
  })
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.name} />
      <h3>Favorite Snacks</h3>
      <ul>
      {/* render snacks here */}
      {snackList}
      </ul>
    </div>
  )
}

export default PetCard
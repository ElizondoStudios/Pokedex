export default{
    name:  "bulbasaur",
    id: 1,
    weight: 69,
    height: 7,
    sprites:{
      back_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      back_shiny:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      front_shiny:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png"
    },
    types:[
      {
        type:{
          name:"grass"
        }
      },
      {
        type:{
          name:"poison"
        }
      }
    ],
    abilities:[
      {
        ability: {
          name: "overgrow"
        }
      },
      {
        ability: {
          name: "chlorophyll"
        }
      }
    ],
    moves:[
      {
        move:{
          name: "razor-wind"
        }
      }
    ]
}
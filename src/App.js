function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Real Madrid</h1>
      </header>
    </div>
  );
}

export class Real_Madrid {
  constructor ( player_name , jersey_number , country){
    this.name = player_name;
    this.jersey = jersey_number;
    this.origin = country;
  }

 Bio(){
  return "My favourite player is player" + this.name + "who wears " + this.jersey + "from the country" + this.origin ;
 }

}

const myfav = new Real_Madrid ("Cristiano Ronaldo" , "7" , "Portugal")
myfav.Bio();

class Real_Madrid_2022 extends Real_Madrid{
  constructor (player_name , jersey_number , country , pos )
  {
    super(player_name);
    super(jersey_number);
    super(country);
    this.position = pos;
  }

  Bio_2020(){
    return this.Bio() + 'plays in the position of ' + this.position;
  }
}

const myfav2020 = new Real_Madrid_2022 ("Cristiano Ronaldo" , "7" , "Portugal" , "Left wing Forward");
myfav2020.Bio_2020();


export default App;

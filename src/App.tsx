import Search from './Search/Search'
import Results from './Results/Results'
import React from 'react'

class App extends React.Component{
  render(): React.ReactNode {
    return (
    <>
      <Search></Search>
      <Results></Results>
    </>
    )
  }
}

export default App

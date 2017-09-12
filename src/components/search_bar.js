import React from 'react'

// functional component
// const SearchBar = () => {
//   return <div>
//     <form>
//       <input type='text' />
//       <input type='submit'>Search</input>
//     </form>
//   </div>
// }

// class component
class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {term: ''}
  }

  render() {
    return (
      <div className='search-bar'>
        <input onChange={
          event => {
            this.props.onSearchTermChange(event.target.value)
            this.setState({term: event.target.value})
          }
        } />
      </div>
    )
  }
}

export default SearchBar
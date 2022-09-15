import { Component } from 'react'
import { FilterBy } from '../cmps/filterBy'
import { CardList } from '../cmps/stays/stay-list'

export class Home extends Component {



    
    render() {
        return (
            <div>
                <FilterBy />
                <CardList />
            </div>
        )
    }
}
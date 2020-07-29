import React, {Component} from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded:true,
                    items: json,
                })
            });
    }

    render() {

        var { isLoaded,items } = this.state;

        if (!isLoaded) {
            return (
                <div className="App" >
                    Not Loaded!!!
                </div>
            )
        } else 
        {
            return (
                <div className="App" >
                    <h1>Welcome</h1><p></p>
                    <ul>
                        {
                            items.map(item =>(
                                
                                <li key={item.id}>
                                    Name: {item.name}<br>
                                    </br>
                                    Street: {item.address.street}<br>
                                    </br>
                                    City : {item.address.city}<br></br>
                                    Zip : {item.address.zipcode}
                                </li>

                        ))};
                    </ul>
                </div>
            )
        }

        
    }
}

export default App;



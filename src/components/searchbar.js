import React from "react"; 
import './search-bar.scss';
//import { getCurrentWeather } from '../apis/open-weather.api';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

    };
    //  getCurrentWeather('London').then((res)=>{
    //      console.log('res',res);
    // })  
    // console.log('my key',process.env.REACT_APP_API_KEY);

    onInputChange(e) {
   this.props.inputChange(e);
    }
    onFormSubmit(e) {
        e.preventDefault(); 
        this.props.formSubmitted();

    }
    //  setInterval(()=>{ 
    //     this.setState(
    //         {
    //             location:"my new view"
    //         }
    //     )
    // },1000);
    //}; 
    /*
    * render function is triggered whenever Updatating
    * the state using the setState function
    */
    render() {

        const location = this.props.location;
        
        return (
            <div className="search-bar">

                <form className="search-bar__form" onSubmit={(e) => this.onFormSubmit(e)}>

                    <button  className="search-bar__button"     type="submit" > search</button>
                    <input id="search"
                        name="search"
                        value={location} 
                        className="search-bar__input"
                        onChange={(e) => this.onInputChange(e)}

                    ></input>
                </form>
                
            </div>
        );
    }

}

export default SearchBar;
import React, { Component } from "react";
import axios from "axios";
import ShowImages from './ShowImages';

class Search extends Component {
    state={
        keyword:"",
        photos: [],
        loader: false,
    }
    inputHandle = (e) =>{
        this.setState({keyword:e.target.value})
    }
    searchHandle = async (e) => {
        e.preventDefault();
        this.setState({loader:true})
        const res = await axios.get(`https://api.pexels.com/v1/search?query=${this.state.keyword}&per_page=15&page=1`,{
            headers:{
                Authorization:`563492ad6f91700001000001224b89eb501b4f48881f9cbc8d62b7db`
            }
        }
        );
        this.setState({loader:false});
        this.setState({photos:res.data.photos});
        console.log(this.state.photos);
        this.setState({keyword:""});
    }
    render() {
        return (
            <div>
                <form onSubmit={this.searchHandle}>
                    <div className="form-group">
                        <input type="text" name="keyword"
                        value={this.state.keyword} className="form-control"
                        onChange={this.inputHandle}
                        placeholder="Search images...."/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Search images"
                        className="btn btn-primary btn-block"/>
                    </div>
                </form>
                <div className="row">
                {!this.state.loader?this.state.photos.map(img => {
                    return <ShowImages image={img} key={img.id}/>
                }
                    
                ):<h1>Loading.....</h1>}
                </div>
            </div>
        )
    }
}

export default Search;
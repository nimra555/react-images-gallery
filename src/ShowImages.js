import React, { Component } from "react";

class ShowImage extends Component{
    render(){
        const { image } = this.props;
        console.log(image);
        return(
                <div className="col-md-3">
                    <img src={image.src.medium} style={{height:"200px",width:"200px",margin:"5px"}} alt="not found" className="img-fluid"/>
                </div>
        )
    }
}

export default ShowImage;
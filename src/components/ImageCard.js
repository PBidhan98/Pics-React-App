import React from 'react';

class ImageCard extends React.Component{
  constructor(props){
    super(props);

    this.imageRef = React.createRef();
  }
//called after the component is rendered.
  componentDidMount() {
    //reaching into DOM through ref system.
    console.log(this.imageRef.current.clientHeight);
    //too early for getting height bcoz we do not have the image loaded up...
  }

  render() {
    const {description, urls} = this.props.image;
    return (
      <div>
        <img
          ref={this.imageRef}
          alt={description}
          src={urls.regular}
        />
      </div>
    );
  }
}

export default ImageCard;

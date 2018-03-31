import React, { Component } from 'react';


export class UserCard extends Component {
  render() {
    let { avatar, bgImage, description, genre, name, userName, socials, style } = this.props;
    return (
      <div className="card card-user" style={style}>
        <div className="image">
          <img src={bgImage} alt="..."/>
        </div>
        <div className="content">
          <div className="author">
            <img className="avatar border-gray" src={avatar} alt="..."/>
            <h4 className="title">
              <small>{userName}</small>
              <br/>
              {name}
            </h4>
          </div>
          <p className="description text-center">
            {genre}
          </p>
          <p className="description text-center">
            {description}
          </p>
        </div>
        {
          socials &&
          <div>
            <hr style={{ marginBottom: '0' }}/>
            <div className="text-center">
              <p className="description text-center">{socials}</p>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default UserCard;

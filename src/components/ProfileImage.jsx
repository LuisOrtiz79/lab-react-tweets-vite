const ProfileImage = (props) =>{
    return(
        <img
        // src= "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/ih_logo.jpeg"
        src= {props.image}
        className="profile"
        alt="profile"
      />
    );
};

export default ProfileImage;
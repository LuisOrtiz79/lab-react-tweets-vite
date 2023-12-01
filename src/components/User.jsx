const User = (props) => {
    return (
        <span className="user">
            {/* <span className="name">Ironhack</span> */}
            {/* <span className="handle">@ironhack</span> */}
            <span className="name">{props.name}</span> 
            <span className="handle">@{props.handle}</span>
        </span>
    );
};

export default User;
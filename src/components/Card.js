const Card = (props) => {
    return(
      <div className="card bg-light mb-4">
          <div className="card-body">
              {props.children}
          </div>
      </div>  
    );
}
export default Card;
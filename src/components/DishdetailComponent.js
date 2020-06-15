import React from 'react';
import {Card, CardImg,CardText,CardBody,CardTitle} from 'reactstrap'


const renderDish =(dish)=>{return(
    <div  className="col-12 col-md-5 m-1">
    <Card>
<CardImg top src={dish.image} alt={dish.name} />
<CardBody>
    <CardTitle>{dish.name}</CardTitle>
    <CardText>{dish.description}</CardText>
</CardBody>
</Card>
</div>)
}

const renderComments=(comments)=>{
    if(comments){
        return(
            <div  className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className='list-unstyled'>
            {comments.map((comment)=>{
                return(
                 <li key={comment.id}>
                  <p>{comment.comment}</p>
                  <p>
                    -- {comment.author} ,&nbsp;
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit"
                    }).format(new Date(Date.parse(comment.date)))}
                  </p>
                </li>
                )
            })}
            </ul>
            </div>
        )
    }
    return <div />;
}
const DishDetail = ({dish}) => {
    const {comments} = dish
    return (
        <div className="row">
        {renderDish(dish)}      
        {renderComments(comments)}
        </div>
)
}

export default DishDetail
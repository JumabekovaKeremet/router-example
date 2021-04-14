import PostList from "./PostList/PostList";
import PostFull from "./PostFull/PostFull";
import classes from "./Posts.module.css";
import { Route } from "react-router";

const Posts = ({ match }) => {
    return ( 
        <div className={classes.Posts}>
            { match.isExact 
            ? <PostList /> 
            : <Route path="/posts/:id" component={PostFull} />}
        </div>
    );
}
 
export default Posts;
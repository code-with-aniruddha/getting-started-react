import React from "react";
import SearchBox from "./SearchBox";
import JsonPlaceHolderApi from "../api/JsonPlaceHolderApi";
import CommentList from "./CommentList";

class App extends React.Component{
    state = {comments: [], postId: ''}

    onInputValChange = async (postid)=>{
        const commentsResponse = await JsonPlaceHolderApi.get(`/posts/comments`,{
            params:{query:postid}
        });
        this.setState({comments: commentsResponse.data, postId: postid});
    }


    render(){
        return (
            <div>
                App works
                <SearchBox postId={this.state.postId} onChange={this.onInputValChange}/>
                <CommentList comments={this.state.comments}/>
            </div>
            
        );
    }
}

export default App;
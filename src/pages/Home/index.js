 import React from "react";
 import Button from '../../Components/Button';
 const link =
 "https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json";


 class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isAuthenticated: false,
            list: null,
            keyword: ""
        };
    }
    componentDidMount(){
        this.fetchData();
    }Button

    fetchData = () => {
        return fetch(link)
        .then(res => res.json())
        .then(res=>{
            this.setState({
                list:res
            })
        })
    }
    handleLogin = () => {
        this.setState({
            isAuthenticated: true
        });
    };
    handleForm = event => {
        this.setState({
            keyword: event.target.value
        });
    };
  render() {
      const listStyle = { marginBottom: 15, borderBottom: "1px solid #000"}
    return (
      <div>
          
          <Button size="lg" onClick={this.handleLogin}>Login</Button>
          <input onChange={this.handleForm} value={this.state.keyword}></input>

          {this.state.list &&
        this.state.list
        .filter(article=> {
            return (
                article.title
                .tolowercase()
                .includes(this.state.keyword.toLowerCase()) || article.content
                .toLowerCase()
                .includes(this.state.keyword.toLowerCase())
            );
        })
        }
          {this.state.list && this.map(article=>{
              return <div style={listStyle}>{article.title}</div>
          })}
          <Status 
          isAuthenticated={this.state.isAuthenticated}
          name={this.state.name}/>
          </div>
    );
  }
}

 export default Home;
import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../redux/actions';

class PostForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: ''
        }
    }

    submitHandler = (event) => {
        event.preventDefault();

        const { title } = this.state;
        if (!title.trim()) {
            return null;
        }
        const newPost = {
            title, id: Date.now().toString()
        }

        this.props.createPost(newPost)
        this.setState({ title: '' })
    }

    changeHandle = (event) => {
        event.persist()
        console.log(event.target.value);

        // this.setState({
        //     title: e.target.value
        // })

        //запись с использованием ES6 синтаксиса, коротко, красиво и универсально, но сложночитаемо
        this.setState(prev => ({ ...prev, ...{ [event.target.name]: event.target.value } }))
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label htmlFor="textInput">Заголовок поста</label>
                    <input
                        type="text"
                        className="form-control"
                        id="textInput"
                        name='title'
                        value={this.state.title}
                        onChange={this.changeHandle}
                    />
                </div>
                <button className="btn btn-success" type="submit">Создать</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    createPost: createPost,

}

export default connect(null, mapDispatchToProps)(PostForm);
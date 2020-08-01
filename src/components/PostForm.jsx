import React from 'react';
import { connect } from 'react-redux';
import { createPost, showAlert } from '../redux/actions';
import Alert from './Alert';

class PostForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            body: '',
        }
    }

    submitHandler = (event) => {
        event.preventDefault();

        const { title, body } = this.state;
        if (!title.trim()) {
            return this.props.showAlert('Введите текст заголовка поста');
        }

        const newPost = {
            title,
            body,
            id: Date.now().toString()
        }

        this.props.createPost(newPost)
        this.setState({ title: '', body: '' })
        console.log(newPost);
    }

    changeHandle = (event) => {
        event.persist()
        console.log(event.target.value);

        //запись с использованием ES6 синтаксиса, коротко, красиво и универсально, но сложночитаемо
        this.setState(prev => ({ ...prev, ...{ [event.target.name]: event.target.value } }))
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                {this.props.alert ? <Alert messageAlert={this.props.alert} /> : null}

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
                <div className="form-group">
                    <label htmlFor="textarea">Текст поста</label>
                    <textarea
                        className="form-control"
                        id="textarea"
                        rows="3"
                        name='body'
                        value={this.state.body}
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
    showAlert: showAlert
}

const mapStateToProps = state => {
    return { alert: state.app.isAlert, }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
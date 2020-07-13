import React from 'react';

export default class PostForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: ''
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        // console.log(e.target);
        // alert(this.state.title);

        const { title } = this.state;

        const newPost = {
            title, id: Date.now().toString()
        }
        console.log(newPost);
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
import React from 'react';

export default class PostForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    submitHandler = (e) => {
        e.preventDefault();
        alert('huyk!')
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label for="textInput">Заголовок поста</label>
                    <input type="text" class="form-control" id="textInput" />
                </div>
                <button className="btn btn-success" type="submit">Создать</button>
            </form>
        )
    }
}
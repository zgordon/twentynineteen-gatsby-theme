import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const commentSubmitQuery = gql`
	mutation($author: String, $commentOn: Int, $content: String, $authorEmail: String) {
		createComment(
			input: {
				clientMutationId: "CreateComment"
				author: $author
				commentOn: $commentOn
				content: $content
				authorEmail: $authorEmail
			}
		) {
			success
		}
	}
`;

class CommentForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			commentStatus: false,
			post: props.postID,
			comment: '',
			author: '',
			email: '',
			url: '',
		};

		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value,
		});
	}

	renderCommentNotes() {
		return (
			<p className="comment-notes">
				<span id="email-notes">Your email address will not be published.</span> Required fields are marked{' '}
				<span className="required">*</span>
			</p>
		);
	}

	renderCommentBodyField() {
		return (
			<p className="comment-form-comment">
				<label htmlFor="comment">Comment</label>
				<textarea
					id="comment"
					name="comment"
					cols="45"
					rows="5"
					maxLength="65525"
					required="required"
					value={this.state.comment}
					onChange={this.handleInputChange}
				/>
			</p>
		);
	}

	renderCommentAuthorField() {
		return (
			<p className="comment-form-author">
				<label htmlFor="author">
					Name <span className="required">*</span>
				</label>
				<input
					id="author"
					name="author"
					type="text"
					size="30"
					maxLength="245"
					required="required"
					value={this.state.author}
					onChange={this.handleInputChange}
				/>
			</p>
		);
	}

	renderCommentEmailField() {
		return (
			<p className="comment-form-email">
				<label htmlFor="email">
					Email <span className="required">*</span>
				</label>
				<input
					id="email"
					name="email"
					type="email"
					size="30"
					maxLength="100"
					aria-describedby="email-notes"
					required="required"
					value={this.state.email}
					onChange={this.handleInputChange}
				/>
			</p>
		);
	}

	renderCommentWebsiteField() {
		return (
			<p className="comment-form-url">
				<label htmlFor="url">Website</label>
				<input
					id="url"
					name="url"
					type="url"
					size="30"
					maxLength="200"
					value={this.state.url}
					onChange={this.handleInputChange}
				/>
			</p>
		);
	}

	renderCommentSubmitButton() {
		return (
			<p className="form-submit">
				<input name="submit" type="submit" id="submit" className="submit" value="Post Comment" />
			</p>
		);
	}

	render() {
		switch (this.state.commentStatus) {
			case 'success':
				return <p>Your comment has been successfully submitted.</p>;
			case 'loading':
				return <p>Please wait. Your comment is being submitted.</p>;
			case 'error':
				return <p>There was an error in your submission. Please try again later.</p>;
			default:
				return (
					<div className="comment-form-flex">
						<span className="screen-reader-text">Leave a comment</span>
						<div id="respond" className="comment-respond">
							<h3 id="reply-title" className="comment-reply-title">
								<small>
									<a
										rel="nofollow"
										id="cancel-comment-reply-link"
										href="#respond"
										style={{ display: 'none' }}
									>
										Cancel reply
									</a>
								</small>
							</h3>
							<Mutation
								mutation={commentSubmitQuery}
								onCompleted={() => {
									this.setState({ commentStatus: 'success' });
								}}
								onError={() => {
									this.setState({ commentStatus: 'error' });
								}}
							>
								{(addComment) => (
									<form
										onSubmit={(event) => {
											event.preventDefault();
											this.setState({ commentStatus: 'loading' });
											addComment({
												variables: {
													author: this.state.author,
													commentOn: this.state.post,
													content: this.state.comment,
													authorEmail: this.state.email,
												},
											});
										}}
										id="commentform"
										className="comment-form"
										noValidate
									>
										{this.renderCommentNotes()}

										{this.renderCommentBodyField()}
										{this.renderCommentAuthorField()}
										{this.renderCommentEmailField()}
										{this.renderCommentWebsiteField()}
										{this.renderCommentSubmitButton()}
									</form>
								)}
							</Mutation>
						</div>
					</div>
				);
		}
	}
}

export default CommentForm;

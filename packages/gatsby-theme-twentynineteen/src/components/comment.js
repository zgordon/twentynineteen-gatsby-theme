import React, { Component } from 'react';

class Comment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: props.commentId,
			date: props.date,
			authorName: props.authorName,
			authorUrl: props.authorUrl,
			commentContent: props.children,
		};
	}

	render() {
		return (
			<li key={this.state.commentId} id={'comment-' + this.state.commentId} className="comment">
				<article id="div-comment-{this.state.commentId}" className="comment-body">
					<footer className="comment-meta">
						<div className="comment-author vcard">
							<a href={this.state.authorUrl} className="url" rel="nofollow external">
								<b className="fn">{this.state.authorName}</b>{' '}
								<span className="screen-reader-text says">says:</span>
							</a>
						</div>
						<div className="comment-metadata">{this.state.date}</div>
						<div
							className="comment-content"
							dangerouslySetInnerHTML={{ __html: this.state.commentContent }}
						></div>
					</footer>
				</article>
			</li>
		);
	}
}

export default Comment;

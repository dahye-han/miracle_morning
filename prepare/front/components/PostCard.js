import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Popover } from 'antd';
import { EllipsisOutlined, HeartOutlined, HeartTwoTone, MessageOutlined, RetweetOutlined } from '@ant-design/icons';
import FollowButton from '../../../lecture/front/components/FollowButton';

const PostCard = ({ post }) => {
    const dispatch = useDispatch();
    const [commentFormOpened, setCommentFormOpened] = useState(false);

    const onToggleComment = useCallback(() => {
        setCommentFormOpened((prev) => !prev);
    }, []);

    return (
        <div>
            {/* <Card
                actions={[
                <RetweetOutlined key="retweet" onClick={onRetweet} />,
                liked
                    ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onUnlike} />
                    : <HeartOutlined key="heart" onClick={onLike} />,
                <MessageOutlined key="comment" onClick={onToggleComment} />,
                <Popover
                    key="more"
                    content={(
                    <Button.Group>
                        {id && post.User.id === id ? (
                        <>
                            {!post.RetweetId && <Button onClick={onClickUpdate}>수정</Button>}
                            <Button type="danger" loading={removePostLoading} onClick={onRemovePost}>삭제</Button>
                        </>
                        ) : <Button>신고</Button>}
                    </Button.Group>
                            )}
                >
                    <EllipsisOutlined />
                </Popover>,
                ]}
                title={post.RetweetId? `${post.User.nickname}님이 리트윗하셨습니다.` : null}
                extra={id && <FollowButton post={post} />}
            ></Card> */}
            {/* {commentFormOpened && (
                <div>
                <CommentForm post={post} />
                <List
                    header={`${post.Comments.length}개의 댓글`}
                    itemLayout="horizontal"
                    dataSource={post.Comments}
                    renderItem={(item) => (
                    <li>
                        <Comment
                        author={item.User.nickname}
                        avatar={(
                            <Link href={`/user/${item.User.id}`}>
                            <a><Avatar>{item.User.nickname[0]}</Avatar></a>
                            </Link>
                        )}
                        content={item.content}
                        />
                    </li>
                    )}
                />
                </div>
            )} */}
        </div>
    );
};

PostCard.propTypes = {
    post: PropTypes.shape({
      id: PropTypes.number,
      User: PropTypes.object,
      content: PropTypes.string,
      Images: PropTypes.arrayOf(PropTypes.object),
      Comments: PropTypes.arrayOf(PropTypes.object),
      createAt: PropTypes.string
    }).isRequired,
};

export default PostCard;
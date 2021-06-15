import Card from './Card/Card';
import { useSelector } from 'react-redux';

const Posts = () => {
    const posts = useSelector((state) => state.posts);

    console.log(posts);

    return (
        <div>
            <h1>Posts</h1>
            <Card />
        </div>
    );
};

export default Posts;

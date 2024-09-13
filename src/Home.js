import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    // useState hook allows to have data with functions in order to be able to make changes to the data themselves
    // the component is rendered when it first loads and then each time data undergoes changes and the state is updated
const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    // const [name, setName] = useState('mario');
// useEffect hook runs a function at each render of the component
// Setting an array argument to useEffect, if the array [] remains empty the function runs only at the very first render
// by using dependencies into the array we can specify any state values that should trigger the useEffect function when they change 
// useEffect(() => {
//     console.log('use effect ran');
//     console.log(name);
// }, [name]); // setting the name in the second argument, the useEffect function will run only when the name changes

// Since the data is here also the state is here, so here is the right place to write functions that change the state of the data
// Functions that change the state of the data should be written where the data is
// The following function is then passed to the BlogList component as props
    // const handleDelete = (id) => {
    //     const newBlog = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlog);
    // }

    return ( 
        <div className="home">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div> }
             {/* Props allows to pass data from a component to another component */}
            { blogs && <BlogList blogs={ blogs } title="All Blogs" /> }
            {/* Filtering data to get only the ones matching the condition */}
            {/* <BlogList blogs={ blogs.filter(blog => blog.author === 'mario') } title="Mario's Blogs"/> */}
            {/* <button onClick={() => setName('luigi')}>change name</button> */}
            {/* <p>{ name }</p> */}
        
        </div>
    );
}
 
export default Home;
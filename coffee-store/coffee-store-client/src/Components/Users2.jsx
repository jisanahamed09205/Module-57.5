import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Users from './Users';
import './Users2.css'

const Users2 = () => {

    const {isPending,isError,error,data: users} =useQuery({
        queryKey: ['uers'],
        queryFn: async () =>{
            const res = await fetch('http://localhost:3000/user')
            return res.json();
        }
    })

    // const [users,setUsers] = useState([]);

    // useEffect(()=>{
    //     fetch('http://localhost:3000/user')
    //     .then(res=> res.json())
    //     .then(data=> setUsers(data))
    // },[])

    const handleDelete = id => {
        // make sure user is confirmed to delete
        fetch(`http://localhost:3000/user/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log('deleted successfully');
                    // remove the user from the UI
                    // const remainingUsers = users.filter(user => user._id !== id);
                    // setUsers(remainingUsers);
                }
            })
    }
    if(isPending){
        return <>
            <div>
                <div className="box-of-star1">
                    <div className="star star-position1" />
                    <div className="star star-position2" />
                    <div className="star star-position3" />
                    <div className="star star-position4" />
                    <div className="star star-position5" />
                    <div className="star star-position6" />
                    <div className="star star-position7" />
                </div>
                <div className="box-of-star2">
                    <div className="star star-position1" />
                    <div className="star star-position2" />
                    <div className="star star-position3" />
                    <div className="star star-position4" />
                    <div className="star star-position5" />
                    <div className="star star-position6" />
                    <div className="star star-position7" />
                </div>
                <div className="box-of-star3">
                    <div className="star star-position1" />
                    <div className="star star-position2" />
                    <div className="star star-position3" />
                    <div className="star star-position4" />
                    <div className="star star-position5" />
                    <div className="star star-position6" />
                    <div className="star star-position7" />
                </div>
                <div className="box-of-star4">
                    <div className="star star-position1" />
                    <div className="star star-position2" />
                    <div className="star star-position3" />
                    <div className="star star-position4" />
                    <div className="star star-position5" />
                    <div className="star star-position6" />
                    <div className="star star-position7" />
                </div>
                <div data-js="astro" className="astronaut">
                    <div className="head" />
                    <div className="arm arm-left" />
                    <div className="arm arm-right" />
                    <div className="body">
                        <div className="panel" />
                    </div>
                    <div className="leg leg-left" />
                    <div className="leg leg-right" />
                    <div className="schoolbag" />
                </div>
            </div>
        </>    
    }
    if(isError){
        return <p>{error.message}</p>
    }

    return (
        <div>
            {/* <h2>Users: {loadedUsers.length}</h2> */}
            <div className="overflow-x-auto text-white">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Last Logged In</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map(user => <tr key={user._id}>
                                <th>1</th>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td>{user.lastLoggedAt}</td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(user._id)} className="btn">X</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users2;
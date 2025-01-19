import { Card, Paper, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Home = () => {


    const [data, setdata] = useState([])
    const [users, setUsers] = useState([])

    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((r) => {
            setdata(r.data)

            console.log(data)
        }).catch(
            (e) =>{
                console.log(e)
            }
        ).finally(()=>{

        })

    axios.get('https://jsonplaceholder.typicode.com/users')
        .then((r) => {
            setUsers(r.data)
        }).catch(
            (e) =>{
                console.log(e)
            }
        ).finally(()=>{
            
        })

    const getUserName = (id) => {
        let userName = ""
        users.forEach(i => {
            if(i.id == id) userName = i.name
        })
        return userName
    }


    return (
        <>
            <Paper elevation={0} >
                {
                    data.map((i) => {
                        return (
                            <Card style={{ margin: "50px", padding: "30px" }}>
                                <Typography variant="h3">{i.title}</Typography>
                                <Typography variant="h6">{getUserName(i.userId)}</Typography>
                                <Typography variant="p">{i.body}</Typography>
                            </Card>
                        )
                    })
                }
            </Paper>
        </>
    )
}

export default Home

import MainContainer from "../components/MainContainer";
import UserCard from "../components/UserCard";
import {Grid} from "@mui/material";

const Users = ({users}) => {

  return (
    <MainContainer pageName={'Пользователи'}>
      <h1 style={{marginTop: '80px'}}>Список пользователей</h1>
      <Grid container spacing={5}>
        {users.map(({id, userName, createdAt}) =>
          <UserCard
            key={id}
            userName={userName}
            create={createdAt}
            id={id}
          />
        )}
      </Grid>
    </MainContainer>
  )
}

export default Users

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/users/')
  const users = await response.json()
  return {
    props: {users},
  }
}

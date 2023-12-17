

export async function loader() {

    const response = await fetch('https://reqres.in/api/users?page=1')

    if(!response.ok) throw Error('cannot fetch users')

 
  return response.json()

}


export async function userDetailLoader({params}) {
  const {id} = params;

  const response = await fetch(`https://reqres.in/api/users/${id}`)

  if(!response.ok) throw Error('cannot fetch users')


return response.json()

}



export async function homeDetailLoader() {
 

  const response = await fetch('https://jsonplaceholder.typicode.com/posts')

  if(!response.ok) throw Error('cannot fetch users')


return response.json()

}
